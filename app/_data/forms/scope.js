module.exports = {
  title: 'scope',
  fields: [
    {
      type: 'text',
      id: 'siteName',
      label: 'Website name',
      Description: `
        <p>
          Provide a name for the website that you would like to evaluate.
          For example:<br/>
          'Public Website of Example Organization';<br/>
          'Webshop of Example Company';<br/>
          'Intranet of Example University'.
        </p>
      `
    },
    {
      type: 'textarea',
      id: 'siteScope',
      label: 'Scope of the website',
      Description: `
        <p>
          Define the scope of the website, so it is clear which web pages are included in the evaluation. For example:
        </p>
        <ul>
          <li>
            'All web content of the public website of Example Org. located at http://www.example.org'
          </li>
          <li>
            'All web content of the online shop of Example Org. located at http://www.example.org/shop/'
          </li>
          <li>
            'All web content of the mobile version of the public website of Example Org. located at http://m.example.org'
          </li>
        </ul>
        <p >
          For more information, see
          <a href="http://www.w3.org/TR/WCAG-EM/#step1a">WCAG-EM Step 1.a: Define the Scope of the Website</a >.
        </p>
      `
    },
    {
      type: 'select',
      id: 'wcagVersion',
      label: 'WCAG Version',
      options: [
        {
          label: 'WCAG 2.1',
          value: 'WCAG21',
          selected: true
        },
        {
          label: 'WCAG 2.0',
          value: 'WCAG20',
          selected: false
        }
      ],
      Description: `
        <p>
          Select the WCAG version to use. Version 2.1 (default) or 2.0
        </p>
      `
    },
    {
      type: 'select',
      id: 'conformanceTarget',
      label: 'Conformance target',
      options: [
        {
          label: 'Level A',
          value: 'A',
          selected: false
        },
        {
          label: 'Level AA',
          value: 'AA',
          selected: true
        },
        {
          label: 'Level AAA',
          value: 'AAA',
          selected: false
        }
      ],
      Description: `
        <p >
          Select a target WCAG 2 conformance level ('A', 'AA', or 'AAA') for the evaluation. For more information, see
          <a href="http://www.w3.org/TR/WCAG-EM/#step1b">WCAG-EM Step 1.b: Define the Conformance Target</a >. This selection determines which conformance level filters are active by default in 'step 4: Audit the Sample'.
        </p>
      `
    },
    {
      type: 'textarea',
      id: 'accessibilitySupportBaseline',
      label: 'Accessibility support baseline',
      Description: `
        <p>
          Define the web browsers, assistive technologies, and other
          <a href="http://www.w3.org/TR/WCAG20/#useragentdef">user agents</a >
          that will be
          <a href="http://www.w3.org/TR/WCAG20/#accessibility-supporteddef">accessibility supported</a >
          by the website. For example, 'Internet Explorer (IE) with JAWS', 'FireFox with NVDA', and 'Apple with VoiceOver' could be basic definitions. For more information, see
          <a href="http://www.w3.org/TR/WCAG-EM/#step1c">WCAG-EM Step 1.c: Define an Accessibility Support Baseline</a >.
        </p>
      `
    },
    {
      type: 'textarea',
      id: 'additionalRequirements',
      label: 'Additional evaluation requirements',
      Description: `
        <p>
          Define any additional evaluation requirements. For example:
        </p>
        <ul>
          <li>
            'The report will include a list of all errors identified by the evaluator, rather than examples only'
          </li>
          <li>
            'The report will include a description of the problem and repair suggestions for any errors listed'
          </li>
          <li>
            'The evaluation will cover all web pages and web content of the website, rather than a selected sample only'
          </li>
        </ul>
        <p >
          For more information, see
          <a href="http://www.w3.org/TR/WCAG-EM/#step1d">WCAG-EM Step 1.d: Define Additional Evaluation Requirements</a >.
        </p>
      `
    }
  ]
};
