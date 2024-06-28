<script lang="ts">
    import { onMount } from "svelte";
    import { fhir } from "./fhir";
    import { Link } from "svelte-routing";
    import FHIR from "fhirclient";

    let data = [];
    onMount(async () => {
        const client = await FHIR.oauth2.ready();
        const tokenResponse = client.getState().tokenResponse;
        console.log('Access Token:', tokenResponse.access_token); // Log the access token
        const r = await client.request('/Patient?gender=male');
        console.log(r);
        data = r.data?.entry;
        console.log(data);
    });
</script>

<h1 class="text-2xl">Patients</h1>
<pre>{JSON.stringify(data, null, 2)}</pre> 
 <Link to="patient">
    <sl-button type="primary">New Patient</sl-button>
</Link>
<!-- <div>
    {#each data as patient}
        <p>
        <Link to={`patient/${patient.resource.id}`} class="text-blue-600 font-bold"
            >{patient.resource.name[0].given[0]}</Link
        > 
    </p>
    {/each}
</div>-->