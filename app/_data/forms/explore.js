module.exports = {
  title: 'explore',
  fields: [
    {
      type: 'checkbox',
      id: 'technologiesReliedUpon',
      label: 'Technologies relied upon',
      Description: `
        <p>
          Identify the web technologies <a href="https://www.w3.org/TR/WCAG21/#dfn-relied-upon">relied upon according to WCAG 2</a> to provide the website. For more information, see <a href="http://www.w3.org/TR/WCAG-EM/#step2d">WCAG-EM Step 2.d: Identify Web Technologies Relied Upon</a>.<br> Note: To add other technologies, select 'Others' and use the 'Web Technology' and 'Specification Address (URL)' field. The 'Specification Address (URL)' field should identify the web technology specification.
        </p>
      `
    },
    {
      type: 'fieldset',
      legend: 'Optional exploration notes',
      fields: [
        {
          type: 'textarea',
          id: 'essentialFunctionality',
          label: 'Essential functionality of the website',
          Description: `
            <p>
              You can use this field to take notes about essential functionality of the website. Examples of essential functionality include:<br>
              'selecting and purchasing a product from the shop area of the website'<br>
              'completing and submitting a form provided on the website'<br>
              'registering for an account on the website'<br>
              For more information, see <a href="http://www.w3.org/TR/WCAG-EM/#step2b">WCAG-EM Step 2.b: Identify Essential Functionality of the Website</a>.
            </p>
          `
        },
        {
          type: 'textarea',
          id: 'pageTypes',
          label: 'Variety of web page types',
          Description: `
            <p>
              You can use this field to take notes about the types (as opposed to instances) of web pages that you find on the web site. This includes notes about different styles, layouts, structures, and functionality provided on the website. For more information, see <a href="http://www.w3.org/TR/WCAG-EM/#step2c">WCAG-EM Step 2.c: Identify the Variety of Web Page Types</a>.<br>
              Note: 'Web pages' include different 'web page states'; see definition of <a href="http://www.w3.org/TR/WCAG-EM/#states">web page states</a>.
            </p>
          `
        }
      ]
    }
  ]
};
