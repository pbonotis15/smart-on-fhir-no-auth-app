import axios from "axios";

export const fhir = axios.create({baseURL: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/"}) ;