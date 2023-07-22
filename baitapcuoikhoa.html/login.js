document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
  
    loginForm?.addEventListener("submit", function (event) {
      // Ngăn hành động submit mặc định của form (reload hoặc chuyển trang tùy theo `action` của form)
      event.preventDefault();
  
      // Lấy giá trị của các input
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Lấy thông tin đăng ký từ Local Storage
      const registeredUsername = localStorage.getItem("username");
      const registeredPassword = localStorage.getItem("password");
  
      // Kiểm tra username và password có khớp với thông tin đăng ký hay không
      if (username !== registeredUsername || password !== registeredPassword) {
        alert("Thông tin đăng nhập không chính xác");
        return;
      }
  
      // Thông báo đăng nhập thành công và lưu thông tin đăng nhập vào Local Storage
      localStorage.setItem("isLogin", true);
      alert("Đăng nhập thành công");
    });
  });

  document.getElementById('button-log').addEventListener("click", function () {
    location.assign("home.html")
})