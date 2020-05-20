import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:5000/api',
});

const errorHandler = err => {
    throw err;
};

export default {
    service,

    handleUpload (theFile) {

        return service.post('/upload-images', theFile)
            .then(res => res.data)
            .catch(errorHandler);

    },

    saveNewThing(newThing) {

        return service.post('/create', newThing)
            .then(res => res.data)
            .catch(errorHandler);
        }
}