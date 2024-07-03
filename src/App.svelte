<!--
 * Author: Panos Bonotis
 * Referenced: Followed a simple tutorial of Sidharth Ramesh of MedBlocks on YouTube
 * Date: Jul-2024
 * Description: This script sets up the routing for a Svelte application using Medblocks UI.
 * Dependencies: medblocks-ui, svelte-routing
 -->


<script lang="ts">
  // Importing necessary libraries and components
  import "medblocks-ui"; // Import Medblocks UI library
  import "medblocks-ui/dist/styles.js"; // Import Medblocks UI styles
  import "medblocks-ui/dist/shoelace"; // Import Shoelace components
  // import "shoelace-style/shoelace/themes/base.css"; // Optional: Import Shoelace base CSS theme
  import { Router, Link, Route } from "svelte-routing"; // Import Svelte routing components
  import PatientRegistration from './lib/PatientRegistration.svelte'; // Import PatientRegistration component
  import Layout from "./lib/Layout.svelte"; // Import Layout component
  import List from "./lib/list.svelte"; // Import List component
</script>

<!-- Define the Router and routes for the application -->
<Router>
  <Layout>
    <!-- Route for the home page, displaying the List component -->
    <Route path="/" component={List}></Route>
    <!-- Route for patient registration -->
    <Route path="patient" component={PatientRegistration} />
    <!-- Route for patient registration with a specific patient ID -->
    <Route path="patient/:id" component={PatientRegistration} />
  </Layout>
</Router>