import axios from "axios";

export const fhir = axios.create({baseURL: "http://snf-895198.vm.okeanos.grnet.gr:8081/fhir"}) ;