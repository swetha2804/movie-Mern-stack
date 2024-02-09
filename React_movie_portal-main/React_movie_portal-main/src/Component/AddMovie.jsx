import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from "yup";

export function AddMovie(){

    const movieValidationSchema = yup.object({
        name: yup.string().required(),
        poster: yup.string().required().min(10).url(),
        trailer: yup.string().required().min(10).url(),
        rating: yup.string().required().min(0).max(10),
        summary: yup.string().required().min(20),
    })
    const formik = useFormik({
        initialValues: {
            name : "",
            poster : "",
            trailer : "",
            rating : "",
            summary : "",
        },
        validationSchema: movieValidationSchema,

        onSubmit: (values) => {
            console.log(values);
        }
    })
    return(
        <form className='add-form' onSubmit={formik.handleSubmit}>
            <h1>Add Movie</h1>
            <TextField 
                id="outlined-basic" 
                label="Name" 
                variant="outlined" 
                placeholder='Name'
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name}
                helperText={formik.touched.name && formik.errors.name?formik.errors.name : null}
            />
            <TextField 
                id="outlined-basic" 
                label="Poster" 
                variant="outlined" 
                placeholder='Poster'
                value={formik.values.poster}
                onChange={formik.handleChange}
                name='poster'
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.poster}
                helperText={formik.touched.name && formik.errors.poster?formik.errors.name : null}
            />

            <TextField 
                id="outlined-basic" 
                label="Rating" 
                variant="outlined" 
                placeholder='Rating'
                value={formik.values.rating}
                onChange={formik.handleChange}
                name="rating"
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.rating}
                helperText={formik.touched.name && formik.errors.rating?formik.errors.name : null}
            />
            <TextField 
                id="outlined-basic" 
                label="Trailer" 
                variant="outlined" 
                placeholder='Trailer'
                value={formik.values.trailer}
                onChange={formik.handleChange}
                name='trailer'
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.trailer}
                helperText={formik.touched.name && formik.errors.trailer?formik.errors.name : null}
            />
            <TextField 
                id="outlined-basic" 
                label="Summary" 
                variant="outlined" 
                placeholder='Summary'
                value={formik.values.summary}
                onChange={formik.handleChange}
                name='summary'
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.summary}
                helperText={formik.touched.name && formik.errors.summary?formik.errors.name : null}
            />
            <Button variant="contained" type='submit'>Add</Button>
        </form>
    )
}