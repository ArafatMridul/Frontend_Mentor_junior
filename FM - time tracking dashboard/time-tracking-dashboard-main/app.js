let allBtn = document.querySelectorAll('.btn');
let clickedBtn;

let dailyBtn = document.getElementById('daily');
let weeklyBtn = document.getElementById('weekly');
let monthlyBtn = document.getElementById('monthly');

let stats_daily = document.querySelectorAll('.stats-amt-daily');
let stats_weekly = document.querySelectorAll('.stats-amt-weekly');
let stats_monthly = document.querySelectorAll('.stats-amt-monthly');

allBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        
        
        if(btn.id == 'daily') {
            dailyBtn.classList.add('active');
            weeklyBtn.classList.remove('active');
            monthlyBtn.classList.remove('active');

            [...stats_daily].forEach((daily) => {
                if(daily.style.display == 'none') {

                    daily.style.display = 'flex';
                }
            });

            [...stats_weekly].forEach((weekly) => {
                weekly.style.display = 'none';
            });

            [...stats_monthly].forEach((monthly) => {
                monthly.style.display = 'none';
            });
        }
        
        if(btn.id == 'weekly') {
            weeklyBtn.classList.add('active');
            dailyBtn.classList.remove('active');
            monthlyBtn.classList.remove('active');

            [...stats_weekly].forEach((weekly) => {
                if(weekly.style.display == 'none') {
                    weekly.style.display = 'flex';
                }
            });

            [...stats_daily].forEach((daily) => {
                daily.style.display = 'none';
            });

            [...stats_monthly].forEach((monthly) => {
                monthly.style.display = 'none';
            });
        }

        if(btn.id == 'monthly') {
            monthlyBtn.classList.add('active');
            dailyBtn.classList.remove('active');
            weeklyBtn.classList.remove('active');

            [...stats_monthly].forEach((monthly) => {
                if(monthly.style.display == 'none') {
                    monthly.style.display = 'flex';
                }
            });

            [...stats_daily].forEach((daily) => {
                daily.style.display = 'none';
            });

            [...stats_weekly].forEach((weekly) => {
                weekly.style.display = 'none';
            });
        }

    })
});