<template>
  <div class="container w-50 my-4 p-3 border rounded-3">
    <h3>Lista de Tareas</h3>
    <input
      class="form-control my-3"
      type="text"
      placeholder="Agregar tarea"
      @keyup.enter="agregarTarea"
      v-model="tarea"
    />
    <button type="button" class="btn btn-primary mb-3" @click="agregarTarea">
      Agregar
    </button>

    <div
      class="alert alert-success"
      role="alert"
      v-for="(item, index) in listaTareas"
      :key="index"
    >
      {{ index + 1 }} : {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tarea: "",
      listaTareas: [],
    };
  },
  methods: {
    agregarTarea() {
      this.listaTareas.push(this.tarea);
      this.tarea = "";
    },
  },
};
</script>


