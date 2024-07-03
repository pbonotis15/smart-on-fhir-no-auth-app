<script lang="ts">
  import "medblocks-ui";
  import "medblocks-ui/dist/styles.js";
  import "medblocks-ui/dist/shoelace";
  //import "shoelace-style/shoelace/themes/base.css";
  import { Router, Link, Route } from "svelte-routing";
  import PatientRegistration from './PatientRegistration.svelte'
  import Layout from "./Layout.svelte";
  import List from "./list.svelte";
</script>

<Router>
  <Layout>
    <Route path="/" component={List}></Route>
   <!-- <Route path="index" component={index}/>-->
    <Route path="patient" component={PatientRegistration} />
    <Route path="patient/:id" component={PatientRegistration} />
  </Layout>
</Router>