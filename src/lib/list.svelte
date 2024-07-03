<!--
 * Author: Panos Bonotis
 * Referenced: Followed a simple tutorial of Sidharth Ramesh of MedBlocks on YouTube
 * Date: Jul-2024
 * Description: This script fetches and displays a list of patients using Svelte and FHIR.
 * Dependencies: svelte, svelte-routing, FHIR client
 -->


<script lang="ts">
    // Import necessary functions and components
    import { onMount } from "svelte";
    import { fhir } from "../fhir"; // Import FHIR client
    import { Link } from "svelte-routing"; // Import Link component from svelte-routing

    // Initialize data array to store patient information
    let data: any[] = [];

    // Fetch patient data when the component is mounted
    onMount(async () => {
        // Make a GET request to fetch patients
        const r = await fhir.get('/Patient');
        console.log(r);
        // Assign the fetched patient data to the data array
        data = r.data?.entry;
    });
</script>

<!-- Title for the Patients page -->
<h1 class="text-2xl">Patients</h1>

<!-- Link to navigate to the patient registration page -->
<Link to="patient">
    <sl-button type="primary">New Patient</sl-button>
</Link>

<!-- Display the list of patients -->
<div>
    {#each data as patient}
        <p>
            <!-- Link to navigate to the patient details page -->
            <Link to={`patient/${patient.resource.id}`} class="text-blue-600 font-bold">
                {patient.resource.name[0].given[0]}
            </Link>
        </p>
    {/each}
</div>