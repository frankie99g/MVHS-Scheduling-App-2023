document.addEventListener('DOMContentLoaded', function () {
    const calendarBody = document.getElementById('calendar-body');
    const monthYear = document.getElementById('month-year');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    function generateCalendar() {
        calendarBody.innerHTML = '';
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);

        monthYear.textContent = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(firstDay);

        let day = new Date(firstDay);

        while (day <= lastDay) {
            const tr = document.createElement('tr');

            for (let i = 0; i < 7; i++) {
                const td = document.createElement('td');

                if (day.getMonth() === currentMonth) {
                    td.textContent = day.getDate();
                }

                tr.appendChild(td);
                day.setDate(day.getDate() + 1);
            }

            calendarBody.appendChild(tr);
        }
    }

    function updateCalendar() {
        generateCalendar();
    }

    prevBtn.addEventListener('click', function () {
        currentMonth -= 1;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear -= 1;
        }
        updateCalendar();
    });

    nextBtn.addEventListener('click', function () {
        currentMonth += 1;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear += 1;
        }
        updateCalendar();
    });

    generateCalendar();
});
