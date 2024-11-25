import { useMemo, useState, useCallback } from "react";
import { APIProvider, Map as ReactGoogleMap } from "@vis.gl/react-google-maps";
import Box from "@mui/material/Box";
import { CONFIG } from "src/config-global";
import { MarkerWithInfo } from "./marker-with-info";

export function Map({ locations, sx, ...other }) {
  // Yeni konumu (iframe'den aldığımız lat, lng değerlerini) defaultCenter olarak ayarlıyoruz
  const defaultCenter = useMemo(() => ({ lat: 39.91018497140684, lng: 32.806322712156096 }), []);

  const [activeMarkerId, setActiveMarkerId] = useState(locations[0]?.id);

  const handleOpenInfo = useCallback(
    (markerId) => {
      if (markerId && activeMarkerId === markerId) {
        setActiveMarkerId(null);
      } else {
        setActiveMarkerId(markerId);
      }
    },
    [activeMarkerId]
  );

  const handleCloseInfo = useCallback(() => setActiveMarkerId(null), []);

  return (
    <Box
      component="section"
      sx={{
        height: 480,
        overflow: "hidden",
        // Styling haritaya özel
        "& .gm-style iframe + div": { border: "none !important" },
        "& .gm-style .gm-style-iw-c": {
          borderRadius: 1.5,
          padding: "0px !important",
          boxShadow: (theme) => theme.customShadows.z8,
        },
        "& .gm-style .gm-style-iw-d": {
          overflow: "unset !important",
          maxHeight: "unset !important",
        },
        "& .gm-style-iw-chr": {
          top: 4,
          right: 4,
          position: "absolute",
          "& button": {
            width: "20px !important",
            height: "20px !important",
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex !important",
            padding: "4px !important",
            bgcolor: "black !important",
          },
        },
        ...sx,
      }}
    >
      <APIProvider apiKey={CONFIG.googleMapApiKey}>
        <ReactGoogleMap
          mapId="49ae42fed52588c3"
          minZoom={1.5}
          defaultZoom={3}
          defaultCenter={defaultCenter} // Bu kısımda defaultCenter'ı ayarladık
          gestureHandling="greedy"
          disableDefaultUI
          {...other}
        >
          {locations.map((location) => (
            <MarkerWithInfo
              key={location.id}
              location={location}
              onClose={handleCloseInfo}
              open={location.id === activeMarkerId}
              onClick={() => handleOpenInfo(location.id)}
            />
          ))}
        </ReactGoogleMap>
      </APIProvider>
    </Box>
  );
}
