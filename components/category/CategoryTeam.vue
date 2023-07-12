<template>
  <AppCard header="צוות המחלקה">
    <table class="shadow">
      <thead>
        <tr>
          <th>שם</th>
          <th>תפקיד</th>
          <th v-if="team.every(member => member.phone)">טלפון</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(member, i) in team" :key="i">
          <td>{{ member.name }}</td>
          <td>{{ member.position }}</td>
          <td v-if="member.phone">{{ member.phone }}</td>
        </tr>
      </tbody>
    </table>
  </AppCard>
</template>

<script setup lang="ts">
import { DepartmentMember } from '../../types';

defineProps<{
  team: DepartmentMember[];
}>();
</script>