import { useForm, } from 'react-hook-form';  
import { Form, Field } from 'src/components/hook-form'; 
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios';
import { useEffect,useState } from 'react';
import TextEditor from 'src/components/texteditor/texteditor';
import { getPageTexts } from 'src/api/comments/getComments';

export function MycontactForm({ sx, ...other }) {
const [textDataList,setTextDataList] = useState([]); 
const defaultValues = {
    isim: '',
    subject: '',
    email: '',
    message: '',
  };

const methods = useForm({
    defaultValues,
  });
const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
const onSubmit = handleSubmit(async (data) => {
    console.log('veriler ->', data);
    try {
      // Backend'e veri gönderme
      const response = await axios.post('http://localhost:3002/sendform/send', {
        name: data.isim,
        subject: data.subject,
        email: data.email,
        message: data.message,
      });

      console.log('Response:', response.data); // Backend'den gelen yanıtı konsola yazdırma
      reset(); // Formu sıfırlama
    } catch (error) {
      console.error('mesaj gönderilemedi1', error);
    }
  });

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
      const response = await getPageTexts("contact")
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
    <Box component="section" sx={{ py: 10, ...sx }} {...other}>
      <Container>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={8}>
            <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
              
              <TextEditor 
              variant="h3"
              css={{ mb: 5, textAlign: 'center' }}
              isAdmin={decodedToken?.isAdmin} 
              initialText={textDataList.find(d => 
                d.element === "Typography" &&
                d.id === "contactformbaslik" &&
                d.path === "/company/contact"
              )?.text} 
              textId={textDataList.find(d => 
                d.element === "Typography" &&
                d.id === "contactformbaslik" &&
                d.path === "/company/contact"
              )?.id}
              />
            </Stack>

            <Form methods={methods} onSubmit={onSubmit}>
              <Stack spacing={2.5} alignItems="center">

              <Field.Text id='contactformname' name="isim" label=
                {textDataList.find(d =>
                d.element === "Field.Text"
                && d.id === "contactformname"
                && d.path === "/company/contact"
                )?.text} />  
                <TextEditor 
          isAdmin={decodedToken?.isAdmin}  
          textId={textDataList.find(d => 
            d.element === "Field.Text" &&
            d.id === "contactformname" &&
            d.path === "/company/contact"
          )?.id}
        />

                <Field.Text id='contactformemail' name="email" 
                label=
                {textDataList.find(d =>
                d.element === "Field.Text"
                && d.id === "contactformemail"
                && d.path === "/company/contact"
                )?.text}
                 />
                 
                 <TextEditor
                    isAdmin={decodedToken?.isAdmin}                  
                    textId={textDataList.find(d => 
                    d.element === "Field.Text" &&
                    d.id === "contactformemail" &&
                    d.path === "/company/contact"
                    )?.id}
                    />
                 
                <Field.Text id='contactformsubject'name="subject" 
                label=
                {textDataList.find(d =>
                d.element === "Field.Text"
                && d.id === "contactformsubject"
                && d.path === "/company/contact"
                )?.text} />
                <TextEditor 
          isAdmin={decodedToken?.isAdmin}  
          textId={textDataList.find(d => 
            d.element === "Field.Text" &&
            d.id === "contactformemail" &&
            d.path === "/company/contact"
          )?.id}
        />
                <Field.Text id='contactformmessage'name="message" multiline rows={4} 
                label=
                {textDataList.find(d =>
                d.element === "Field.Text"
                && d.id === "contactformmessage"
                && d.path === "/company/contact"
                )?.text}
                 placeholder='Size hangi konuda yardımcı olabiliriz' />
                 <TextEditor 
          isAdmin={decodedToken?.isAdmin} 
          textId={textDataList.find(d => 
            d.element === "Field.Text" &&
            d.id === "contactformmessage" &&
            d.path === "/company/contact"
          )?.id}
        />

                <LoadingButton id='contactformsubmit'
                  size="large"
                  type="submit"
                  variant="contained"
                  color="inherit"
                  loading={isSubmitting}
                  sx={{ mt: 2 }}
                >
                  {textDataList.find(d =>
                d.element === "LoadingButton"
                && d.id === "contactformsubmit"
                && d.path === "/company/contact"
                )?.text}
                </LoadingButton>
                <TextEditor 
          isAdmin={decodedToken?.isAdmin} 
          textId={textDataList.find(d => 
            d.element === "LoadingButton" &&
            d.id === "contactformsubmit" &&
            d.path === "/company/contact"
          )?.id}
        />

              </Stack>
            </Form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
