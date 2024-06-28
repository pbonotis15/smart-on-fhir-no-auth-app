<script lang="ts">
    import { onMount } from 'svelte';
    import FHIR from "fhirclient";

    // Define the authorize function
    function authorize() {
        FHIR.oauth2.authorize({
            client_id: '4f293d85-ad40-4551-b95e-699a466a3b43',
            scope: 'patient.read',
            redirect_uri: 'http://localhost:5173',
            iss: 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4',
            aud: ''
        });
    }
</script>

<h1 class="text-2xl">Welcome to this Testing App</h1>
<button on:click={authorize}>Are you a provider at an Epic System? Login here.</button>