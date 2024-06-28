<script lang="ts">
    import { onMount } from "svelte";
    import { fhir } from "./fhir";
    import { navigate } from "svelte-routing";
    import FHIR from "fhirclient";

    let loading: boolean = false;

    export let id;
    let form;
    console.log(id);

    async function handleSubmit(e: any) {
      loading = true;
      if (id) {
        const r = await fhir.put(`/Patient/${id}`, { ...e.detail, id });
        console.log(r);
      } else {
        //const r = await fhir.post("/Patient", e.detail);
        const client = await FHIR.oauth2.ready();
        const tokenResponse = client.getState().tokenResponse;
        console.log('Access Token:', tokenResponse.access_token); // Log the access token
        const newPatient = {
                resourceType: "Patient",
                ...e.detail
            };
            console.log('New Patient Resource:', JSON.stringify(newPatient, null, 2));
            const r = await client.create({
          resourceType: "Patient",
          body: newPatient
        });
        console.log(r);
      }
      loading = false;
      navigate("/", {replace: true});
    }
    onMount(async () => {
        if (id) {
            const r = await fhir.get(`/Patient/${id}`)
            const resource = r.data
            form.import(resource);
        }
    })
  </script>
  <h1>Patient Registration</h1>
  <mb-fhir-form 
    bind:this={form} 
    class="flex flex-col gap-3"
    on:mb-submit={handleSubmit}>
    
    <mb-context path="resourceType" bind="Patient"></mb-context>
    <h4><mb-input label="Name" path="name[0].given[0]"></mb-input></h4>
    <h4><mb-date label="Date of birth" path="birthDate"></mb-date></h4>
    <h4><mb-buttons class="center" datatype="code" label="Gender" path="gender">
      <mb-option value="male" label="Male"></mb-option>
      <mb-option value="female" label="Female"></mb-option>
      <mb-option value="other" label="Other"></mb-option>
    </mb-buttons></h4>
    <mb-submit>
      <sl-button {loading} type="info">Submit</sl-button>
    </mb-submit>
  </mb-fhir-form>