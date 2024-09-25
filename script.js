// Common Functions to get Element by ID

function getTextByID (id){
    let text = document.getElementById(id).innerText;
    return text;
}
function getValueByID (id){
    let value = document.getElementById(id).value;
    return value;
}

// Toggle Button
document.getElementById('donate-button').addEventListener('click', function(){
    document.getElementById('history-button').classList.add('bg-transparent');
    document.getElementById('donate-button').classList.remove('bg-transparent');
    document.getElementById('donate-button').classList.add('bg-[#b4f461]');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('donation-container').classList.remove('hidden');
})

document.getElementById('history-button').addEventListener('click', function(){
    document.getElementById('history-button').classList.add('bg-[#b4f461]', 'border-[#b4f461]');
    document.getElementById('history-button').classList.remove('bg-transparent');
    document.getElementById('donate-button').classList.add('bg-transparent');
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');
})

// For Noakhali

// Event Adding on Donate Now Button on Feni Flood
document.getElementById('donate-button-noakhali').addEventListener('click', function (event){
    event.preventDefault();
    // Remove money from Balance
    let newDonation = getValueByID('new-amount-noakhali');
    let newDonationNumber = parseFloat(newDonation);
    let currentBalance = getTextByID('current-balance')
    let currentBalanceNumber = parseFloat(currentBalance);


    if(newDonationNumber <= currentBalanceNumber && !isNaN(newDonation)) {
        let newBalance = currentBalanceNumber - newDonationNumber;
        document.getElementById('current-balance').innerText = newBalance;

        // Add money to donation
        let donatedMoney = getTextByID('donated-amount-noakhali');
        let donatedMoneyNumber = parseFloat(donatedMoney);
        let newDonatedMoney = donatedMoneyNumber + newDonationNumber;
        document.getElementById('donated-amount-noakhali').innerText = newDonatedMoney;

        // Modal Popup
        my_modal_1.showModal()


        // Add to History
        let time = new Date();
        const div = document.createElement('div');
        div.classList.add('space-y-2', 'border', 'rounded-xl', 'p-8')
        div.innerHTML = 
                    `<h2 class="font-semibold text-xl">
                        ${newDonationNumber} Taka is Donated for Flood at Noakhali, Bangladesh.
                    </h2>
                    <p class="font-light text-sm text-[#484949]">
                        Date : ${Date ()}
                    </p>`
        document.getElementById('history-container').appendChild(div);
    }
    else{
        alert('Faild to Donate Money.')
    }
    

})

// For Feni

// Event Adding on Donate Now Button on Feni Flood
document.getElementById('donate-button-feni').addEventListener('click', function (event){
    event.preventDefault();
    // Remove money from Balance
    let newDonation = getValueByID('new-amount-feni');
    let newDonationNumber = parseFloat(newDonation);
    let currentBalance = getTextByID('current-balance')
    let currentBalanceNumber = parseFloat(currentBalance);

    if (newDonationNumber <= currentBalanceNumber && !isNaN(newDonation)) {
        let newBalance = currentBalanceNumber - newDonationNumber;
        document.getElementById('current-balance').innerText = newBalance;

        // Add money to donation
        let donatedMoney = getTextByID('donated-amount-feni');
        let donatedMoneyNumber = parseFloat(donatedMoney);
        let newDonatedMoney = donatedMoneyNumber + newDonationNumber;
        document.getElementById('donated-amount-feni').innerText = newDonatedMoney;

        // Modal Popup
        my_modal_1.showModal()

        // Add to History
        let time = new Date();
        const div = document.createElement('div');
        div.classList.add('space-y-2', 'border', 'rounded-xl', 'p-8')
        div.innerHTML = 
                    `<h2 class="font-semibold text-xl">
                        ${newDonationNumber} Taka is Donated for Flood Relief in Feni,Bangladesh.
                    </h2>
                    <p class="font-light text-sm text-[#484949]">
                        Date : ${Date ()}
                    </p>`
        document.getElementById('history-container').appendChild(div);
    }
    else{
        alert('Faild to Donate Money.')
    }
    

})

// For Student Protest

// Event Adding on Donate Now Button on Feni Flood
document.getElementById('donate-button-protest').addEventListener('click', function (event){
    event.preventDefault();
    // Remove money from Balance
    let newDonation = getValueByID('new-amount-protest');
    let newDonationNumber = parseFloat(newDonation);
    let currentBalance = getTextByID('current-balance')
    let currentBalanceNumber = parseFloat(currentBalance);

    if (newDonationNumber <= currentBalanceNumber && !isNaN(newDonation)){
        let newBalance = currentBalanceNumber - newDonationNumber;
        document.getElementById('current-balance').innerText = newBalance;

        // Add money to donation
        let donatedMoney = getTextByID('donated-amount-protest');
        let donatedMoneyNumber = parseFloat(donatedMoney);
        let newDonatedMoney = donatedMoneyNumber + newDonationNumber;
        document.getElementById('donated-amount-protest').innerText = newDonatedMoney;

        // Modal Popup
        my_modal_1.showModal()

        // Add to History
        let time = new Date();
        const div = document.createElement('div');
        div.classList.add('space-y-2', 'border', 'rounded-xl', 'p-8')
        div.innerHTML = 
                    `<h2 class="font-semibold text-xl">
                        ${newDonationNumber} Taka is Donated for Aid for Injured in the Quota Movement.
                    </h2>
                    <p class="font-light text-sm text-[#484949]">
                        Date : ${Date ()}
                    </p>`
        document.getElementById('history-container').appendChild(div);
    }
    else{
        alert('Faild to Donate Money.')
    }
    

})


