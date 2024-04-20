import { Link } from "react-router-dom"
import "./BookAppointment.css"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const BookAppointment = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

    const [ patientName, setPatientName ] = useState('');
    const [ patientNumber, setPatientNumber ] = useState('');
    const [ patientGender, setPatientGender ] = useState('default');
    const [ appointmentTime, setAppointmentTime ] = useState('');
    const [ PrefferedMode, setPrefferedMode] = useState('default');
    const [ isSubmitted, setIsSubmitted] = useState(false);
    const [ formErrors, setFormErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        //validate from inputs
        const errors = {};
        if(!patientName.trim()){
            errors.patientName = "Patient name is required";
        }else if(patientName.trim().length < 8 ){
            errors.patientName = "Patient name must be greater than 8";
        }

        if(!patientNumber.trim()){
            errors.patientNumber = "Patients Phone number is required";
        }else if((patientNumber.trim().length !== 10)){
            errors.patientNumber = "Not a Valid Mobile Number";
        }

        if(patientGender === 'default'){
            errors.patientGender = "Please select Patients Gender";
        }
        if(!appointmentTime){
            errors.appointmentTime = "Appointment time is required";
        }else{
            const selectedTime = new Date(appointmentTime).getTime();
            const currentTime = new Date().getTime();
            if(selectedTime <= currentTime){
                errors.appointmentTime = "Please Enter a future appointment time";
            }
        }
        if(PrefferedMode === 'default'){
            errors.PrefferedMode = "Please Select preffered Mode";
        }

        if(Object.keys(errors).length > 0 ){
            setFormErrors(errors);
            return;
        }

        //reset Form fields and errors after successfull submission
        setPatientName('');
        setPatientNumber('');
        setPatientGender('default');
        setAppointmentTime('');
        setPrefferedMode('default');
        setFormErrors({});

        toast.success("Appointment Scheduled !", {
            position: toast.POSITION.TOP_CENTER,
            onOpen: () => setIsSubmitted(true),
            onClose: () => setIsSubmitted(false),
          });
    }

  return (
    <div className="appointment-form-section">
        <h1 className="site-title-h1">
            <Link className="site-title" to='/medify'>Medify +</Link>
        </h1>
        <div className="form-container" >
        <h2 className="form-title">Please fill the required details and submit the form to Book an appointment</h2>

        <form action="" className="form-content" onSubmit={handleSubmit}>
            <label htmlFor="">
                Full Name <br />
                <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} required/>
                {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p> }
            </label><br />
            <label htmlFor="">Contact Number <br />
                <input type="text" value={patientNumber} onChange={(e) => setPatientNumber(e.target.value)} required/>
                {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
            </label><br />
            <label htmlFor="">Gender <br />
                <select name="" id="" value={patientGender} onChange={(e) => setPatientGender(e.target.value)} required>
                    <option value="default">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}   
            </label><br />
            <label htmlFor="">Apppointment Time <br />
                <input type="datetime-local" name="" id="" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)}/>
                {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
            </label><br />
            <label htmlFor="">Preffered Mode <br />
                <select name="" id="" value={PrefferedMode} onChange={(e) => setPrefferedMode(e.target.value)} required>
                    <option value="default">Select</option>
                    <option value="Voice">Voice Call</option>
                    <option value="Video">Video Call</option>
                    <option value="InPerson">In Person</option>

                </select>
                {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
            </label><br />
            <button type="submit" className="appointment-btn">Confirm Appointment</button>
            <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Appointment details has been sent to the patients phone number via SMS.</p>
        </form>
        </div>
        <ToastContainer autoClose={2000} limit={1} closeButton={false} />
    </div>
  )
}

export default BookAppointment