<template>
  <label class="custom-checkbox">
    Remember Me
    <input type="checkbox" :name="name">
    <span class="checkmark"></span>
  </label>
</template>

<script>
  export default {
    name: 'Checkbox',
    props: 'name'
  }
</script>

<style lang="scss" scoped>
  /* Customize the label (the container) */
  .custom-checkbox {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: $color-text-light;
    font-family: "Raleway", Verdana, Geneva, sans-serif;
    font-weight: normal;

    /* Hide the browser's default checkbox */
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    /* On mouse-over, add a grey background color */
    &:hover input ~ .checkmark {
      background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    input:checked ~ .checkmark {
      background-color: $color-2;
    }

  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;

    /* Create the checkmark/indicator (hidden when not checked) */
    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  /* Show the checkmark when checked */
  .custom-checkbox input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .custom-checkbox .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
