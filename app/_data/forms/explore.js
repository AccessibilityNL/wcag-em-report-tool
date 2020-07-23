module.exports = {
  title: 'explore',
  fields: [
    {
      type: 'checkbox',
      id: 'technologiesReliedUpon',
      label: 'Technologies relied upon'
    },
    {
      type: 'fieldset',
      legend: 'Optional exploration notes',
      fields: [
        {
          type: 'textarea',
          id: 'essentialFunctionality',
          label: 'Essential functionality of the website'
        },
        {
          type: 'textarea',
          id: 'pageTypes',
          label: 'Variety of web page types'
        }
      ]
    }
  ]
};
