import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Container, Typography, Paper, Grid, TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import TextEditor from 'src/components/texteditor/texteditor';
import { getPageTexts } from 'src/api/comments/getComments';

export function Basvuru() {
const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    position: '',
    address: '',
    reference: '',
    experience: '',
    lastCompany: '',
    file: null
  });
const handleChange = (e) => {
const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type === 'file' ? files[0] : value });
  };
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      surname: '',
      age: '',
      gender: '',
      phone: '',
      email: '',
      position: '',
      address: '',
      reference: '',
      experience: '',
      lastCompany: '',
      file: null
    });
  };

  const [textDataList, setTextDataList] = useState([]);
  const [decodedToken, setDecodedToken] = useState(null)
 useEffect(() => {
  const token = localStorage.getItem('token'); // Token'ı local storage'dan al
  if (token) {
    const decoded = parseJwt(token); // Token'ı decode et
    setDecodedToken(decoded);
    console.log("Decoded Token:", decoded);
  } else {
    console.log("Token bulunamadı");
  }
}, []);

useEffect(() => {
  const fetchTextData = async () => {
    try {
      const response = await getPageTexts("İnsanKaynaklari")
      console.log("Alınan veri:", response.data);
      setTextDataList(response.data); 
    } catch (error) {
      console.error('Veri alma hatası:', error);
    }
  };

  fetchTextData(); 
}, []);

const parseJwt = (token) => {
  if (!token) return null; 
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window.atob(base64)
      .split('')
      .map((c) => {
        const hex = c.charCodeAt(0).toString(16).padStart(2, '0');
        return `%${hex}`;
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
};

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 0,
        position: 'relative'
      }}
    >
      <Box
        component="img"
        src="/assets/images/ürünler/insankaynakları2.jpg"
        alt="İnsan Kaynakları" 
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 900,
          width: '55%',
          height: '100%',
          objectFit: 'cover',
        transform: 'scaleX(-1)' 
        }}
      />
      <Box
        component="img"
        src="/assets/images/ürünler/insankaynakları2.jpg"
        alt="İnsan Kaynakları"
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 900,
          width: '55%',
          height: '100%',
          objectFit: 'cover',
          
          
        }}
      />
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: 600,
          zIndex: 1, 
        }}
      >

        <TextEditor 
        variant="h2"
        elementType="typography"
          isAdmin={decodedToken?.isAdmin} 
          initialText={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "ikbaslik1" &&
            d.path === "/company/İnsanKaynaklari"
          )?.text} 
          textId={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "ikbaslik1" &&
            d.path === "/company/İnsanKaynaklari"
          )?.id}
        />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={12}>
            <Paper
              sx={{
                padding: 2,
                width: '100%',
                marginBottom: 2
              }}
            >
            
              <TextEditor gutterBottom
          variant="h5"
          elementType="typography"
          isAdmin={decodedToken?.isAdmin} 
          initialText={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "ikbaslik2" &&
            d.path === "/company/İnsanKaynaklari"
          )?.text} 
          textId={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "ikbaslik2" &&
            d.path === "/company/İnsanKaynaklari"
          )?.id}
        />
              <form onSubmit={handleSubmit}>
                
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField id ='ikname'
                      label={textDataList.find(d =>
                        d.element === "TextField"
                        && d.id === "ikname"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                    <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                  
                    textId={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "ikname" &&
                    d.path === "/company/e-İnsanKaynaklari"
                    )?.id}
                    />
                    
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField id='iksurname'
                      label={textDataList.find(d =>
                        d.element === "TextField"
                        && d.id === "iksurname"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                     <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                  
                    textId={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "iksurname" &&
                    d.path === "/company/e-İnsanKaynaklari"
                    )?.id}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField ik='ikage'
                      label={textDataList.find(d =>
                        d.element === "TextField"
                        && d.id === "ikage"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                    <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                  
                    textId={textDataList.find(d => 
                    d.element === "TextField" &&
                    d.id === "ikage" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id='ikgender'>
                       {textDataList.find(d =>
                        d.element === "InputLabel"
                        && d.id === "ikgender"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                        </InputLabel>
                        <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                
                    textId={textDataList.find(d => 
                    d.element === "InputLabel" &&
                    d.id === "ikgender" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                      <Select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        label="Cinsiyet"
                        required
                      >
                        <MenuItem value="male" id='gender1'>
                        {textDataList.find(d =>
                        d.element === "MenuItem"
                        && d.id === "gender1"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text
                        }</MenuItem>
                        <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                  
                    textId={textDataList.find(d => 
                    d.element === "MenuItem" &&
                    d.id === "gender1" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                        <MenuItem value="female" id='gender2'>
                        {textDataList.find(d =>
                        d.element === "MenuItem"
                        && d.id === "gender2"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                        </MenuItem>
                        <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                   
                    textId={textDataList.find(d => 
                    d.element === "MenuItem" &&
                    d.id === "gender2" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                        <MenuItem value="other" id='gender3'>
                        {textDataList.find(d =>
                        d.element === "MenuItem"
                        && d.id === "gender3"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                        </MenuItem>
                        <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                   
                    textId={textDataList.find(d => 
                    d.element === "MenuItem" &&
                    d.id === "gender3" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />

                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField id='ikphone'
                      label={textDataList.find(d =>
                        d.element === "TextField"
                        && d.id === "ikphone"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                    <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                   
                    textId={textDataList.find(d => 
                    d.element === "TextField" &&
                    d.id === "ikphone" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField id ='ikemail'
                      label={textDataList.find(d =>
                        d.element === "TextField"
                        && d.id === "ikemail"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                    <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                    
                    textId={textDataList.find(d => 
                    d.element === "TextField" &&
                    d.id === "ikemail" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id='ikposition'>
                      {textDataList.find(d =>
                        d.element === "InputLabel"
                        && d.id === "ikposition"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                      </InputLabel>
                      <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                   
                    textId={textDataList.find(d => 
                    d.element === "InputLabel" &&
                    d.id === "ikposition" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                      <Select
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        label="Başvurulan Pozisyon"
                        required
                      >
                        <MenuItem value="1" ik='ikposition1'>
                        {textDataList.find(d =>
                        d.element === "MenuItem"
                        && d.id === "ikposition1"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                        </MenuItem>
                        <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                   
                    textId={textDataList.find(d => 
                    d.element === "MenuItem" &&
                    d.id === "ikposition1" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                        <MenuItem value="2"ik='ikposition2'>
                        {textDataList.find(d =>
                        d.element === "MenuItem"
                        && d.id === "ikposition2"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                        </MenuItem>
                        <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                  
                    textId={textDataList.find(d => 
                    d.element === "MenuItem" &&
                    d.id === "ikposition2" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                        <MenuItem value="3"ik='ikposition3'>
                        {textDataList.find(d =>
                        d.element === "MenuItem"
                        && d.id === "ikposition3"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                        </MenuItem>
                        <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                    
                    textId={textDataList.find(d => 
                    d.element === "MenuItem" &&
                    d.id === "ikposition3" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                        <MenuItem value="4"ik='ikposition4'>
                        {textDataList.find(d =>
                        d.element === "MenuItem"
                        && d.id === "ikposition4"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                        </MenuItem>
                        <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                   
                    textId={textDataList.find(d => 
                    d.element === "MenuItem" &&
                    d.id === "ikposition4" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                        <MenuItem value="5"ik='ikposition5'>
                        {textDataList.find(d =>
                        d.element === "MenuItem"
                        && d.id === "ikposition5"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                        </MenuItem>
                        <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                    
                    textId={textDataList.find(d => 
                    d.element === "MenuItem" &&
                    d.id === "ikposition5" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                        <MenuItem value="6"ik='ikposition6'>
                        {textDataList.find(d =>
                        d.element === "MenuItem"
                        && d.id === "ikposition6"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                        </MenuItem>
                        <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                   
                    textId={textDataList.find(d => 
                    d.element === "MenuItem" &&
                    d.id === "ikposition6" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id='ikaddress'
                      label={textDataList.find(d =>
                        d.element === "TextField"
                        && d.id === "ikaddress"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                    <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                  
                    textId={textDataList.find(d => 
                    d.element === "MenuItem" &&
                    d.id === "ikaddress" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id='ikreference'
                       label={textDataList.find(d =>
                        d.element === "TextField"
                        && d.id === "ikreference"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                      name="reference"
                      value={formData.reference}
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                    <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                   
                    textId={textDataList.find(d => 
                    d.element === "MenuItem" &&
                    d.id === "ikreference" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id='ikexperience'
                      label={textDataList.find(d =>
                        d.element === "TextField"
                        && d.id === "ikexperience"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                    <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                   
                    textId={textDataList.find(d => 
                    d.element === "MenuItem" &&
                    d.id === "ikexperience" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label htmlFor="file-upload">
                      <input
                        id="file-upload"
                        type="file"
                        name="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleChange}
                        style={{ display: 'none' }}
                      />
                      <Button id ='ikupload'
                        variant="contained"
                        component="span"
                        sx={{
                          textTransform: 'none',
                          backgroundColor: '#1976d2',
                          '&:hover': {
                            backgroundColor: '#1565c0',
                          },
                        }}
                      >
                        {textDataList.find(d =>
                        d.element === "Button"
                        && d.id === "ikupload"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                        
                      </Button>
                      <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                   initialText={textDataList.find(d => 
                    d.element === "Button" &&
                    d.id === "ikupload" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.text} 
                    textId={textDataList.find(d => 
                    d.element === "Button" &&
                    d.id === "ikupload" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                    </label>
                    <TextField
                      value={formData.file ? formData.file.name : 'Dosya seçilmedi'}
                      sx={{
                        marginTop: 1,
                        width: '100%',
                        '& input': {
                          cursor: 'pointer',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          backgroundColor: '#f5f5f5',
                          border: '1px solid #ccc',
                          borderRadius: 1,
                          padding: 1,
                        },
                      }}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" id='iksubmit'>
                    {textDataList.find(d =>
                        d.element === "Button"
                        && d.id === "iksubmit"
                        && d.path === "/company/İnsanKaynaklari"
                        )?.text}
                    </Button>
                    <TextEditor
                    isAdmin={decodedToken?.isAdmin} 
                  //  initialText={textDataList.find(d => 
                  //   d.element === "Button" &&
                  //   d.id === "iksubmit" &&
                  //   d.path === "/company/İnsanKaynaklari"
                  //   )?.text} 
                    textId={textDataList.find(d => 
                    d.element === "Button" &&
                    d.id === "iksubmit" &&
                    d.path === "/company/İnsanKaynaklari"
                    )?.id}
                    />
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Basvuru;
