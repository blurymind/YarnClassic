export var JSONEditor = function({ id }) {
  this.tableAdd = ({ key, value }) => {
    var $clone = this.table
      .find('tr.hide')
      .clone(true)
      .removeClass('hide table-line');
    if (key && value) {
      console.log('mutate', { key, value, html: $clone.html() });
      $clone.html(`
                <td contenteditable="true" class="cell">${key}</td>
                <td contenteditable="true" class="cell">${value}</td>
                <td>
                    <span class="table-remove glyphicon glyphicon-remove">x delete</span>
                </td>
            `);
      $('.table-remove').on('click', function() {
        $(this)
          .parents('tr')
          .detach();
      });
    }
    this.table.find('table').append($clone);
  };
  this.getValue = () => {
    var $rows = this.table.find('tr:not(:hidden)');
    var headers = [];
    var data = [];

    // Get the headers (add special header logic here)
    $($rows.shift())
      .find('th:not(:empty):not([data-attr-ignore])')
      .each(function() {
        headers.push(
          $(this)
            .text()
            .toLowerCase()
        );
      });

    // Turn all existing rows into a loopable array
    $rows.each(function() {
      var $td = $(this).find('td');
      var h = {};
      // Use the headers from earlier to name our hash keys
      headers.forEach(function(header, i) {
        h[header] = $td.eq(i).text(); // will adapt for inputs if text is empty
      });

      data.push(h);
    });
    // Output the result
    // var $EXPORT = $('#save');
    // $EXPORT.text(JSON.stringify(data));
    return data;
  };

  this.init = () => {
    document.getElementById(id).innerHTML = `
        <div class="container">
  <div id="table" class="table-editable">
    <table class="table">
        <tr class="table-header">
            <th>Key</th>
            <th>Value</th>
            <th data-attr-ignore>Remove</th>
        </tr>


      <!-- This is our clonable table line -->
      <tr class="hide" class="editable-row">
        <td contenteditable="true" class="cell">key</td>
        <td contenteditable="true" class="cell">val</td>
        <td>
          <span class="table-remove glyphicon glyphicon-remove">x delete</span>
        </td>
      </tr>
    </table>

    <div class="table-footer">
        <button id="save-btn" class="btn btn-primary">Save Data</button>
        <p id="save"></p>
        <span class="table-add glyphicon glyphicon-plus">+ add</span>
    </div>
  </div>
</div>
        `;
    var $TABLE = $('#table');
    var $BTN = $('#save-btn');
    this.table = $TABLE;
    this.rows = $TABLE.find('tr:not(:hidden)');
    var $EXPORT = $('#save-btn');
    $EXPORT.addClass('hide');

    $('.table-add').on('click', this.tableAdd);

    $('.table-remove').on('click', function() {
      console.log({ removeThis: this });
      $(this)
        .parents('tr')
        .detach();
    });

    // A few jQuery helpers for exporting only
    jQuery.fn.pop = [].pop;
    jQuery.fn.shift = [].shift;
    $BTN.on('click', this.getValue);
  };
  this.init();

  this.setValue = (newValue = []) => {
    newValue.forEach(this.tableAdd);
  };
};
