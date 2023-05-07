import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import '../Styles.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MuiTelInput } from 'mui-tel-input'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SignUpContainer from '../hooks/SignUpContainer';

const SignUp = () => {
    const {firstName,lastName, email, password, confirmPassword, phone, alternativePhone, cp, dni, changeInput, 
        changePhone, changeAlternativePhone, changeData, loginButtonDisabled, onSubmit, dateOfBirth } = SignUpContainer()
    return (
        <div className='conteiner'>
            <form className='formSignUp' onSubmit={onSubmit}>
                <div className="avatar_Container">
                    <AccountCircleIcon className="avatar" color="error" />
                </div>
                <h1 className="title">Registrate</h1>
                <div className='input_container'>
                    <div className='item'>
                        <TextField name="firstName" label="Nombre" variant="outlined" required autoComplete="fname" fullWidth autoFocus onChange={changeInput} value={firstName} />
                    </div>
                    <div className='item'>
                        <TextField name="lastName" label="Apellido" variant="outlined" required autoComplete="fname" fullWidth onChange={changeInput} value={lastName} />
                    </div>
                    <div className='item__col12'>
                        <TextField name="email" label="direcion de email" variant="outlined" required autoComplete="email" fullWidth onChange={changeInput} value={email} />
                    </div>
                    <div className='item__col12'>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker value={dateOfBirth} onChange={changeData} disableFuture />
                        </LocalizationProvider>
                    </div>
                    <div className='item'>
                        <TextField label="clave" name="password" variant="outlined" required type="password" autoComplete="current-password" fullWidth onChange={changeInput} value={password} />
                    </div>
                    <div className='item'>
                        <TextField label="confirmar clave" name="confirmPassword" variant="outlined" required type="password" autoComplete="current-password" fullWidth onChange={changeInput} value={confirmPassword} />
                    </div>

                    <div className='item'>
                        <MuiTelInput className='input textfield' fullWidth value={phone} onChange={e => changePhone(e)} />
                    </div>
                    <div className='item'>
                        <MuiTelInput className='input textfield' fullWidth value={alternativePhone} onChange={e => changeAlternativePhone(e)} />
                    </div>
                </div>
                <RadioGroup name="gender" row className='input_container' onChange={changeInput}>
                    <FormControlLabel value="female" control={<Radio />} label="Femenino" />
                    <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="other" control={<Radio />} label="indefinido" />
                </RadioGroup>

                <div className='input_container'>
                    <div className='item'>
                        <TextField variant="outlined" name="dni" fullWidth label="DNI" type="number" autoComplete="Dni" onChange={changeInput} value={dni} />
                    </div>
                    <div className='item'>
                        <TextField variant="outlined" name="cp" fullWidth label="Cp" type="number" autoComplete="cp" onChange={changeInput} value={cp} />
                    </div>
                </div>
                <div className='input_container'>
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ maxWidth: "90%" }} disabled={loginButtonDisabled()} >
                        REGISTRARME
                    </Button>
                </div>
            </form>
        </div>);
}
export default SignUp;