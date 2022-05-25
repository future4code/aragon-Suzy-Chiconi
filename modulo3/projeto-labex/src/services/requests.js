import { goToAdminPage } from '../routes/coordinator';
import { BASE_URL, API_CLIENT } from "../constants/urls";
import axios from 'axios';

export const requestLogin = (email, password, navigate) => {
    const body = {
        email: email,
        password: password
    }

    axios.post(`${BASE_URL}/${API_CLIENT}/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            alert("Login realizado com sucesso!");
            goToAdminPage(navigate);
        })
        .catch((error) => {
            alert("Ocorreu um erro! Tente novamente");
            console.log(error.message);
        });
};

export const deleteTrip = (tripId, getTripsData) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    };

    axios.delete(`${BASE_URL}/${API_CLIENT}/trips/${tripId}`, header)
        .then(() => {
            alert("Viagem removida com sucesso!");
            getTripsData();
        })
        .catch((err) => {
            alert(err.message);
        });
};