<script></script>

<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Nota</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        10
      </div>
      <div class="col-md-6">
                <input
                  type="text"
                  class="form-control nota"
                  placeholder="nota"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira a nota.
                </div>
              </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.nota{
  padding-left: 20px;
}
</style>