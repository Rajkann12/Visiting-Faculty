$(document).ready(function () {
  // SIDE-BAR OPENING EVENT
  const mobileHamburger = document.querySelector('.hamburger-smalldevices');
  const leftBar = document.querySelector('.left-sidebar');

  mobileHamburger.addEventListener('click', () => {
    leftBar.classList.toggle('left-sidebar-open');
  })
})


function delay(callback, ms) {
  var timer = 0;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}



$('#add-more-qualification').on('click', function () {

  if ($('#academicQualificationForm').attr("data-display") == "false") {
    $('#academicQualificationForm').toggleClass('d-none').attr("data-display", "true");
  }
});

$('#addQualificationDetails').on('click', function () {

$('.academic-qualification-details').removeClass('d-none');
  console.log('valyue', $('#academicQualificationForm').attr("data-display"));
  if ($('#academicQualificationForm').attr("data-display") == "true") {
    let tableRow = `<tr>
                    <td>${$('#academicQualificationForm').find('select[name="faculty_qualification"]').val()}</td>
                    <td>${$('#academicQualificationForm').find('input[name="faculty_professional_qualification"]').val()}</td>
                    <td>${$('#academicQualificationForm').find('input[name="faculty_qualification_university"]').val()}</td>
                    <td><i class="fa-solid fa-eye"></i></td>
                  </tr>`
    $('.academic-qualification-details tbody').append(tableRow);
    $('#academicQualificationForm').toggleClass('d-none').attr("data-display", "false");
  }


})

$('#faculty_qualification').on('input', function () {
  let phdDetails = `
                    <div>
                      <p>PHD :</p>
                      <input type="radio" id="awarded" name="awarded" value="awarded" class="form-check-input">
                      <label for="awarded">Awarded</label><br>
                      <input type="radio" id="pursuing" name="pursuing" value="pursuing" class="form-check-input">
                      <label for="pursuing">Pursuing</label><br>
                    </div>
                    <div>
                        <label for="specialization">Specialization</label>
                        <input type="text" name="specialization" id="specialization" class="form-control">
                    </div>
                    <div>
                        <label for="research_interest">Research Interest</label>
                        <input type="text" name="research_interest" id="research_interest" class="form-control">
                    </div>
                    <div>
                    <label for="recent_publication">Recent Publication Interest</label>
                    <input type="text" name="recent_publication" id="recent_publication" class="form-control">
                    </div>
                    <div>
                    <label for="books_published">Books Published</label>
                    <input type="text" name="books_published" id="books_published" class="form-control">
                    </div>
                    <div>
                    <label for="books_chapter">Books Chapters</label>
                    <input type="text" name="books_chapter" id="books_chapter" class="form-control">
                    </div>
                    <div>
                    <label for="referred_journal_articles">Referred Journal Articles</label>
                    <input type="text" name="referred_journal_articles" id="referred_journal_articles" class="form-control">
                    </div>
                    <div>
                    <label for="fellowship">Fellowship</label>
                    <input type="text" name="fellowship" id="fellowship" class="form-control">
                    </div>
                    <div>
                    <label for="case_study">Case Study</label>
                    <input type="text" name="case_study" id="case_study" class="form-control">
                    </div>
                    <div>
                        <label for="publication_details">Publication Details</label>
                        <input type="file" name="publication_details" id="publication_details" class="form-control">
                    </div>
                    `


  if ($(this).val() == "PHD") {
    $('.pdhDetails').html(phdDetails);
  }
  if ($(this).val() == "Graduate" || $(this).val() == "Masters") {
    $('.pdhDetails').html("");
  }
})

//Add and Remove more rows for teaching
$('#add-moreTeachingDetails').on('click', function () {
  console.log("rows Added::::")
  let lastTr = $('#add-moreTeachingDetails-table tbody tr:last-child')
  let university = lastTr.find(`input[name='university']`).val();
  let subjectTaught = lastTr.find(`input[name='subjectTaught']`).val();
  let program = lastTr.find(`input[name='program']`).val();
  let fromDate = lastTr.find(`input[name='fromDate']`).val();
  let toDate = lastTr.find(`input[name='toDate']`).val();
  let holidayReason = lastTr.find(`input[name='duration']`).val();
  let pedagogy = lastTr.find(`input[name='pedagogy']`).val();
  let feedBack = lastTr.find(`input[name='feedBack']`).val();


  let clonedTr = lastTr.clone();
  // clonedTr.find(`input[name='calendarId']`).val('')
  // clonedTr.find(`input[name='calendarName']`).val('')
  // clonedTr.find(`input[name='campusId']`).val('')
  // clonedTr.find(`input[name='calendarYear']`).val('')
  // clonedTr.find(`input[name='holidayDate']`).val('')
  // clonedTr.find(`input[name='holidayReason']`).val('')


  $('#add-moreTeachingDetails-table tbody').append(clonedTr)
})

$('#add-moreTeachingDetails-table').on('click', '.remove-teachingDetails', function () {
  let trLength = $('#add-moreTeachingDetails-table tbody tr').length;
  if (trLength > 1) {
    $(this).closest('tr').remove()
  } else {
    alert('Cannot delete this room.')
  }
})

//Add and Remove more rows for Industry
$('#add-moreIndustryDetails').on('click', function () {
  console.log("rows2 Added::::")
  let lastTr = $('#add-moreIndustryDetails-table tbody tr:last-child')
  let organization = lastTr.find(`input[name='organization']`).val();
  let designation = lastTr.find(`input[name='designation']`).val();
  let roleAndResponsibilities = lastTr.find(`input[name='roleAndResponsibilitiesgram']`).val();
  let fromDate = lastTr.find(`input[name='fromDate']`).val();
  let toDate = lastTr.find(`input[name='toDate']`).val();

  let clonedTr = lastTr.clone();
  // clonedTr.find(`input[name='calendarId']`).val('')
  // clonedTr.find(`input[name='calendarName']`).val('')
  // clonedTr.find(`input[name='campusId']`).val('')
  // clonedTr.find(`input[name='calendarYear']`).val('')
  // clonedTr.find(`input[name='holidayDate']`).val('')
  // clonedTr.find(`input[name='holidayReason']`).val('')

  $('#add-moreIndustryDetails-table tbody').append(clonedTr)
})

$('#add-moreIndustryDetails-table').on('click', '.remove-industryDetails', function () {
  let trLength = $('#add-moreIndustryDetails-table tbody tr').length;
  if (trLength > 1) {
    $(this).closest('tr').remove()
  } else {
    alert('Cannot delete this room.')
  }
})

//Add and Remove more rows for professional
$('#add-moreProfessionalDetails').on('click', function () {
  console.log("rows2 Added::::")
  let lastTr = $('#add-moreProfessionalDetails-table tbody tr:last-child')
  let organization = lastTr.find(`input[name='organization']`).val();
  let designation = lastTr.find(`input[name='designation']`).val();
  let roleAndResponsibilities = lastTr.find(`input[name='roleAndResponsibilitiesgram']`).val();
  let fromDate = lastTr.find(`input[name='fromDate']`).val();
  let toDate = lastTr.find(`input[name='toDate']`).val();

  let clonedTr = lastTr.clone();
  // clonedTr.find(`input[name='calendarId']`).val('')
  // clonedTr.find(`input[name='calendarName']`).val('')
  // clonedTr.find(`input[name='campusId']`).val('')
  // clonedTr.find(`input[name='calendarYear']`).val('')
  // clonedTr.find(`input[name='holidayDate']`).val('')
  // clonedTr.find(`input[name='holidayReason']`).val('')

  $('#add-moreProfessionalDetails-table tbody').append(clonedTr)
})

$('#add-moreProfessionalDetails-table').on('click', '.remove-professionalDetails', function () {
  let trLength = $('#add-moreProfessionalDetails-table tbody tr').length;
  if (trLength > 1) {
    $(this).closest('tr').remove()
  } else {
    alert('Cannot delete this room.')
  }
})


//step-form next

let currentFormStep = 1;

$('.step-form .step-form-body .active-form').removeClass('active-form').addClass('d-none');
$(`.step-form .step-form-body .step[data-step=${currentFormStep}]`).removeClass('d-none').addClass(
  'active-form');

function formStepNext() {
  if(currentFormStep < 4){currentFormStep++;}
  
  console.log('clicked!!')
  $(`.step-form .stages .stage:nth-child(-n + ${currentFormStep-1})`).removeClass('pending').addClass('submitted');
  $(`.step-form .stages .stage:nth-child(${currentFormStep})`).removeClass('pending').addClass('active');

  $('.step-form .step-form-body .active-form').removeClass('active-form').addClass('d-none');
  $(`.step-form .step-form-body .step[data-step=${currentFormStep}]`).removeClass('d-none').addClass('active-form');
  console.log(currentFormStep);

  if(currentFormStep === 4){
    $('#next-step').addClass('d-none');
    $('#finish-form').removeClass('d-none');
  }
}

$("#next-step").on('click', function () {

  formStepNext() });

$("#finish-form").on('click', function() {
  $('.main').addClass('d-none');
  $('.main2').removeClass('d-none');
})