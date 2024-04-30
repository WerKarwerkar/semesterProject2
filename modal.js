

const loginModal = `
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header position-relative mb-3">
    <h5 class="modal-title w-100 text-center position-absolute mt-3" id="loginModalLabel">Log In</h5>
    <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close" style="right: 15px;"></button>
  </div>
      <div class="modal-header justify-content-center mx-2">
      <a href="#" class="text-primary me-1" style="text-decoration: none;">Create account</a>
      <a href="#" class="text-primary ms-1">Sign up</a>
    </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="inputEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail" placeholder="Enter your email">
          </div>
          <div class="mb-3">
            <label for="inputPassword" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword" placeholder="Enter your password">
          </div>
          <div class="d-flex justify-content-between">
            <div class="form-check mb-3">
              <input type="checkbox" class="form-check-input" id="rememberMe">
              <label class="form-check-label" for="rememberMe">Remember me</label>
            </div>
            <div class="mb-3">
              <a href="#" class="text-secondary" style="text-decoration: underline;">Forgot password?</a>
            </div>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
`;







const signinModal = `
<div class="modal fade" id="signinModal" tabindex="-1" aria-labelledby="signinModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header position-relative mb-3">
        <h5 class="modal-title w-100 text-center position-absolute mt-3" id="signinModalLabel">Sign Up</h5>
        <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close" style="right: 15px;"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="inputName" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputName" placeholder="Enter your name">
          </div>
          <div class="mb-3">
            <label for="signinEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="signinEmail" placeholder="Enter your email">
          </div>
          <div class="mb-3">
            <label for="signinPassword" class="form-label">Password</label>
            <input type="password" class="form-control" id="signinPassword" placeholder="Create a password">
          </div>
          <div class="mb-3">
          <label for="avatarUrl" class="form-label">Avatar URL</label>
         <input type="text" class="form-control" id="avatarUrl" placeholder="Enter the URL of your avatar">
         </div>
          <div class="mb-3">
            <label for="bannerinload" class="form-label">Banner</label>
            <input type="file" class="form-control" id="bannerinload" accept="image/*">
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div> 
`;


function loginmodal() {
    document.querySelector('.login-display').innerHTML = loginModal;
    var myModal = new bootstrap.Modal(document.getElementById('loginModal'), {});
    myModal.show();
}




function signinmodal() {    
    document.querySelector('.signin-display').innerHTML = signinModal;
    var myModal = new bootstrap.Modal(document.getElementById('signinModal'), {});
    myModal.show();
}