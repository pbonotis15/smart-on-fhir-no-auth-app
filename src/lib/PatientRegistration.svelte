<!--
 * Author: Panos Bonotis
 * Referenced: Followed a simple tutorial of Sidharth Ramesh of MedBlocks on YouTube
 * Date: Jul-2024
 * Description: This script handles patient registration and updates using Svelte and FHIR.
 * Dependencies: svelte, svelte-routing, FHIR client, medblocks-ui
 -->

<script lang="ts">
  // Import necessary functions and components
  import { onMount } from "svelte";
  import { fhir } from "../fhir"; // Import FHIR client
  import { navigate } from "svelte-routing"; // Import navigate function for routing

  // Initialize loading state
  let loading: boolean = false;

  // Declare variables for patient ID and form
  export let id: any;
  let form: { import: (arg0: any) => void; };

  console.log(id); // Log the patient ID for debugging

  // Function to handle form submission
  async function handleSubmit(e: any) {
      loading = true;
      if (id) {
          // If patient ID exists, update the patient information
          const r = await fhir.put(`/Patient/${id}`, { ...e.detail, id });
          console.log(r);
      } else {
          // If patient ID does not exist, create a new patient
          const r = await fhir.post("/Patient", e.detail);
          console.log(r);
      }
      loading = false;
      // Navigate back to the home page after submission
      navigate("/", { replace: true });
  }

  // Fetch patient data when the component is mounted if ID exists
  onMount(async () => {
      if (id) {
          const r = await fhir.get(`/Patient/${id}`);
          const resource = r.data;
          form.import(resource); // Import the fetched patient data into the form
      }
  });
</script>

<!-- Title for the Patient Registration page -->
<h1>Patient Registration</h1>

<!-- FHIR form for patient registration -->
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