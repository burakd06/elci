import slugify from 'slugify';
import path from 'path';
import multer from 'multer';

function randomname(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    let randomUniqueName = randomname(10);
    const fileName = path.basename(file.originalname, path.extname(file.originalname));
    const fileExt = path.extname(file.originalname);
    const cleanedFileName = slugify(fileName, {
      replacement: '-',
      remove: /[*+~.()'"!:@]/g,
      lower: true,
      strict: true,
    });
    const limitedFileName = cleanedFileName.substring(0, 50);
    const finalFileName = `${randomUniqueName}${limitedFileName}${fileExt}`

    req.imageFileName = finalFileName;

    cb(null, finalFileName);
    console.log(finalFileName);
  },
});


const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 20 * 1024 * 1024, // 5 MB'a kadar olan dosyaları kabul et
  },
});

export default upload;
