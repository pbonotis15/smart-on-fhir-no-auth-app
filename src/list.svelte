<script lang="ts">
    import { onMount } from "svelte";
    import { fhir } from "./fhir";
    import { Link } from "svelte-routing";

    let data: any[] = [];
    onMount(async () => {
        const r = await fhir.get('/Patient');
        console.log(r);
        data = r.data?.entry;
    });
</script>

<h1 class="text-2xl">Patients</h1>
<!-- <pre>{JSON.stringify(data, null, 2)}</pre>  -->
 <Link to="patient">
    <sl-button type="primary">New Patient</sl-button>
</Link>
<div>
    {#each data as patient}
        <p><!-- svelte-ignore a11y-missing-attribute -->
        <Link to={`patient/${patient.resource.id}`} class="text-blue-600 font-bold"
            >{patient.resource.name[0].given[0]}</Link
        > 
    </p>
    {/each}
</div>