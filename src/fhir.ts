/*
 * Author: Panos Bonotis
 * Referenced: Followed a simple tutorial of Sidharth Ramesh of MedBlocks on YouTube
 * Date: Jul-2024
 * Description: This script creates an axios instance configured with the base URL for the FHIR server.
 * Dependencies: axios
 */

import axios from "axios";

// Create an axios instance with the base URL for the FHIR server
export const fhir = axios.create({
    baseURL: "http://snf-895198.vm.okeanos.grnet.gr:8081/fhir"
});