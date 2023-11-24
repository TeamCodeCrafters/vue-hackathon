<script></script>

<template>
<div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 text-center mt-5 mb-5">
        <div class="card my-5 ">

          <form class="card-body cardbody-color p-lg-5">

            <div class="text-center">
              <img src="../assets/img/logo.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile">
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="User Name">
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="password">
            </div>
            <div class="text-center"><button type="submit" class="btn btn-color px-5 mb-5 w-100">Login</button></div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-color{
  background-color: #0e1c36;
  color: #fff;
  
}

.profile-image-pic{
  height: 200px;
  width: 200px;
  object-fit: cover;
}



.cardbody-color{
  background-color: #ebf2fa;
}

a{
  text-decoration: none;
}

body {
    background-image: url("@/assets/img/BGintro.png");
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
</style>