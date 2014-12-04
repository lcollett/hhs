var cases = [
    {
      '[id]': 'HV0341422',
      '[className]': 'Family Visit fa-calendar',
      
      '>span.priority': ['urgent', 'upcoming', 'fyi'][0],
      '>a.type': 'Family Visit',
      '>a': 'Sanchez, Jerry'.link('#UTAE0341422'),
      
      '>time.due': new Date(+new Date + (12*60*60*1e3))/* in 12h */,
      '>time.created': new Date, // now
      
      '>form.checklist': [
        'Facility is clean, sanitary and free of hazards',
        'Adequate handrails and ramps provided',
        'Operating emergency lighting available',
        'Age appropriate furnishings and activities',
        'Bathroom, kitchen floors are washable',
        'Electrical outlets are tamper-proof if needed',
        'Premises are free from pests',
        'Address is clearly visible and location is accessible'
      ].map(function(title){
        var fieldset = $E('fieldset');
        fieldset.appendChild($E('legend', { innerText: title }));
        var values = ['fails', 'meets', 'exceeds']
          .map(function(value){
            var label = $E('label', { innerText:value });
            label.appendChild($E('input', 
              { type:'radio', value:value, name:title }));
            fieldset.appendChild(label);
          });
        fieldset.appendChild($E('textarea', 
          { name:'comments', placeholder:'Please provide comments' }));
        return fieldset.outerHTML;
      }).join('')
    }
  ];