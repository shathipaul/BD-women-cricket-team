document.getElementById('cal-btn-1').addEventListener('click', function(){
    const perPlayerCost = document.getElementById('per-player-cost');
    const perPlayerCostString = perPlayerCost.value;
    const perPlayerCostTotal = parseFloat(perPlayerCostString);

    const playerarray = players.length
    
    const perPlayerCostMultiply = perPlayerCostTotal * playerarray;
    
   
    setInnerTextById('player-expenses', perPlayerCostMultiply)
})

document.getElementById('cal-btn-2').addEventListener('click', function(){
    const managerExpense = document.getElementById('manager-expense');
    const managerExpenseString = managerExpense.value;
    const managerExpenseFinal = parseFloat(managerExpenseString);

    const coachExpense = document.getElementById('coach-expense');
    const coachExpenseString = coachExpense.value;
    const coachExpenseFinal = parseFloat(coachExpenseString);

    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesTotalString = playerExpenses.innerText;
    const playerExpensesTotal = parseFloat(playerExpensesTotalString);


    const totalExpenceSub = managerExpenseFinal + coachExpenseFinal + playerExpensesTotal;
     
    setInnerTextById('total-expense', totalExpenceSub )
   
})