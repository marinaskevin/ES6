const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  At tellus at urna condimentum mattis pellentesque. Suscipit tellus
  mauris a diam maecenas sed enim ut sem. Consectetur a erat nam at
  lectus. A iaculis at erat pellentesque adipiscing commodo elit. Elit
  sed vulputate mi sit. Bibendum at varius vel pharetra vel. Id
  consectetur purus ut faucibus pulvinar elementum integer enim. Nunc
  sed id semper risus in hendrerit. Quam pellentesque nec nam aliquam.`;

function printTemplateLiterals() {
  document.getElementById("template_literals_text").innerHTML = paragraph;
}

function clearTemplateLiterals() {
  document.getElementById("template_literals_text").innerHTML = ``;
}

document.getElementById("template_literals").innerHTML = `
      <button class="btn" onClick="printTemplateLiterals()">paragraph</button> <button class="btn" onClick="clearTemplateLiterals()">clear</button>
      <textarea id="template_literals_text" class="form-control" rows="4" cols="50"></textarea>
`;
