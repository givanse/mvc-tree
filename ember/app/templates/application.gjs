import { pageTitle } from 'ember-page-title';
import MvcNavbar from 'mvc-tree/components/mvc-navbar';

<template>
  {{pageTitle "MvcTree"}}
  <MvcNavbar />
  {{outlet}}
</template>
