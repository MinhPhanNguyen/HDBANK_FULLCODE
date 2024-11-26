const mongoose = require('mongoose');

const URI = 'mongodb+srv://swminh0918195615:swminh0918195615@cluster0.fv6dd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true ,
})
.then(() => {
    console.log('Kết nối MongoDB thành công!');
})
.catch((err) => {
    console.error('Lỗi khi kết nối MongoDB:', err);
});