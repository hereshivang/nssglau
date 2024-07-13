import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination : function(req,file, cb){
        cb(null,' /uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const filetype = (file, cb) => {
    const ext = path.extname(file.originalname);
    if(ext !== '.jpg' && ext !== '.png' && ext !== '.jpeg') {
        return cb(new Error('Only jpg, png, jpeg format allowed!'), false);
    }
}

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        filetype(file, cb);
    }
});

export default upload;