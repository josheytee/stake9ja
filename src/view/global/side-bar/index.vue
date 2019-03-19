<template>
  <div>
    <div ref="mySidebar" class="sidebar">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">&times;</a>
      <a href="#">Home</a>
      <a href="#">How to Play</a>
      <a href="#">
        Fund Account
        <ul>
          <li><a href="#">Add Funds</a></li>
          <li><a href="#">Transfer</a></li>
        </ul>
      </a>
      <a href="#">Games
        <ul>
          <li><a href="#">Play Now</a></li>
          <li><a href="#">Games Played</a></li>
          <li><a href="#">Create Private Game</a></li>
          <li><a href="#">Pending Games</a></li>
          <li><a href="#">Game history</a></li>
        </ul>
      </a>
      <a href="#">Withdrawals
        <ul>
          <li><a href="#">Add bank details</a></li>
          <li><a href="#">Withdraw to bank</a></li>
          <li><a href="#">Payments</a></li>
        </ul>
      </a>
      <a href="#">Edit Profile
        <ul>
          <li><a href="#">Update Profile</a></li>
          <li><a href="#">Edit Password</a></li>
        </ul>
      </a>
      <a href="#">Notifications
        <ul>
          <li><a href="#">Inbox</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </a>
    </div>
    <a href="#" v-on:click="toggleNav()" style="color: white">Menu</a>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
    methods: {
      showing: false,
      openNav: function () {
        this.showing = true
        document.getElementById('main').style.marginLeft = '250px'
        this.$refs.mySidebar.style.width = '250px'
      },
      /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
      closeNav() {
        this.showing = false
        this.$refs.mySidebar.style.width = '0'
        document.getElementById('main').style.marginLeft = '0'
      },
      /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
      toggleNav() {
        return this.showing === true ? this.closeNav() : this.openNav()
      }
    }
  }
</script>

<style lang="scss" scoped>
  /* The sidebar menu */
  .sidebar {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    top: 0;
    color: white;
    left: 0;
    background-color: $color-secondary; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 40px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
    font-size: 8px;
    /* The sidebar links */
    a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 12px;
      color: $color-light;
      display: block;
      transition: 0.3s;

      /* When you mouse over the navigation links, change their color */
      &:hover {
        color: #f1f1f1;
      }
    }
    ul {
      background-color: $color-1;
      margin: 10px;
      li {
        border-bottom: solid 1px $color-light;
        &:last-child {
          border-bottom: 0;
        }
        a {
          &:hover {
            color: $color-secondary;
          }
        }
      }
    }

    /* Position and style the close button (top right corner) */
    .closebtn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
    }
  }

  /* The button used to open the sidebar */
  .openbtn {
    font-size: 20px;
    cursor: pointer;
    background-color: #111;
    color: white;
    padding: 10px 15px;
    border: none;
    &:hover {
      background-color: #444;
    }
  }

  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
  #main {
    transition: margin-left .5s; /* If you want a transition effect */
    padding: 20px;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidebar {
      padding-top: 15px;
    }
    .sidebar a {
      font-size: 18px;
    }
  }
</style>
