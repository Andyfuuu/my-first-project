// 遊戲數據庫
const gameData = {
    "genshin": {
        name: "原神",
        currency: "原石",
        pullCost: 160,
        characterPity: 90,
        weaponPity: 80,
        softPity: 75,
        baseRate: 0.6,
        rateUp: 50,
        packages: [
            {value: "6480", crystals: 6480, bonus: 1600, price: 3290},
            {value: "3280", crystals: 3280, bonus: 600, price: 1690},
            {value: "1980", crystals: 1980, bonus: 260, price: 990},
            {value: "980", crystals: 980, bonus: 110, price: 490},
            {value: "300", crystals: 300, bonus: 30, price: 170},
            {value: "60", crystals: 60, bonus: 0, price: 33}
        ]
    },
    "honkai-star-rail": {
        name: "崩壞：星穹鐵道",
        currency: "古老夢華",
        pullCost: 160,
        characterPity: 90,
        weaponPity: 80,
        softPity: 75,
        baseRate: 0.6,
        rateUp: 50,
        packages: [
            {value: "6480", crystals: 6480, bonus: 0, price: 3290},
            {value: "3280", crystals: 3280, bonus: 0, price: 1690},
            {value: "1980", crystals: 1980, bonus: 0, price: 990},
            {value: "980", crystals: 980, bonus: 0, price: 490},
            {value: "300", crystals: 300, bonus: 0, price: 170},
            {value: "60", crystals: 60, bonus: 0, price: 33}
        ]
    },
    "azur-lane": {
        name: "碧藍航線",
        currency: "鑽石",
        pullCost: 200,
        characterPity: 0,
        weaponPity: 0,
        softPity: 0,
        baseRate: 7,
        rateUp: 70,
        packages: [
            {value: "整船", crystals: 4900, bonus: 0, price: 2690},
            {value: "小箱", crystals: 2400, bonus: 0, price: 1350},
            {value: "袋", crystals: 1200, bonus: 0, price: 670},
            {value: "把", crystals: 600, bonus: 0, price: 330},
            {value: "小把", crystals: 300, bonus: 0, price: 170}
        ]
    },
    "blue-archive": {
        name: "藍色檔案",
        currency: "青輝石",
        pullCost: 120,
        characterPity: 200,
        weaponPity: 0,
        softPity: 0,
        baseRate: 2.5,
        rateUp: 70,
        packages: [
            {value: "6480", crystals: 6480, bonus: 1600, price: 3290},
            {value: "3280", crystals: 3280, bonus: 600, price: 1690},
            {value: "1980", crystals: 1980, bonus: 260, price: 990},
            {value: "980", crystals: 980, bonus: 110, price: 490},
            {value: "300", crystals: 300, bonus: 30, price: 170},
            {value: "60", crystals: 60, bonus: 0, price: 33}
        ]
    },
    "fgo": {
        name: "Fate/Grand Order",
        currency: "聖晶石",
        pullCost: 3,
        characterPity: 0,
        weaponPity: 0,
        softPity: 0,
        baseRate: 1,
        rateUp: 70,
        packages: [
            {value: "167", crystals: 167, bonus: 50, price: 3290},
            {value: "86", crystals: 86, bonus: 25, price: 1690},
            {value: "55", crystals: 55, bonus: 15, price: 990},
            {value: "41", crystals: 41, bonus: 8, price: 490},
            {value: "12", crystals: 12, bonus: 2, price: 170},
            {value: "1", crystals: 1, bonus: 0, price: 33}
        ]
    },
    "arknights": {
        name: "明日方舟",
        currency: "源石",
        pullCost: 600,
        characterPity: 100,
        weaponPity: 0,
        softPity: 50,
        baseRate: 2,
        rateUp: 50,
        packages: [
            {value: "一箱", crystals: 6480, bonus: 0, price: 3290},
            {value: "一袋", crystals: 3280, bonus: 0, price: 1690},
            {value: "一盒", crystals: 1980, bonus: 0, price: 990},
            {value: "一把", crystals: 980, bonus: 0, price: 490},
            {value: "一小把", crystals: 300, bonus: 0, price: 170}
        ]
    },
    "eternal-return": {
        name: "永恆輪迴",
        currency: "NP",
        pullCost: 100,
        characterPity: 0,
        weaponPity: 0,
        softPity: 0,
        baseRate: 3,
        rateUp: 100,
        packages: [
            {value: "13550", crystals: 13550, bonus: 0, price: 2700},
            {value: "6500", crystals: 6500, bonus: 0, price: 1350},
            {value: "4335", crystals: 4335, bonus: 0, price: 930},
            {value: "2435", crystals: 2435, bonus: 0, price: 540},
            {value: "1205", crystals: 1205, bonus: 0, price: 270},
            {value: "800", crystals: 800, bonus: 0, price: 180}
        ]
    }
};

// 添加格式化工具
const formatters = {
    currency: new Intl.NumberFormat('zh-TW', {
        style: 'currency',
        currency: 'TWD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }),
    percentage: new Intl.NumberFormat('zh-TW', {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    }),
    number: new Intl.NumberFormat('zh-TW', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })
};

// 格式化函數
function formatCurrency(value) {
    return formatters.currency.format(value);
}

function formatPercentage(value) {
    // 確保值是數字且轉換為百分比
    const percentage = value * 100;
    return new Intl.NumberFormat('zh-TW', {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    }).format(value);
}

function formatNumber(value) {
    return formatters.number.format(value);
}

// 更新遊戲選項時的處理
function updateGameOptions() {
    const game = document.getElementById('game').value;
    const gameInfo = gameData[game];
    
    // 更新輸入欄位
    document.getElementById('pull-cost').value = gameInfo.pullCost;
    document.getElementById('pity-count').value = gameInfo.characterPity;
    document.getElementById('soft-pity').value = gameInfo.softPity;
    document.getElementById('base-rate').value = gameInfo.baseRate;
    document.getElementById('up-rate').value = gameInfo.rateUp;
    
    // 更新幣種單位顯示
    document.getElementById('currency-unit').textContent = gameInfo.currency;
    
    // 更新儲值方案下拉選單
    const rechargeSelect = document.getElementById('recharge-option');
    rechargeSelect.innerHTML = '';
    gameInfo.packages.forEach(pkg => {
        const option = document.createElement('option');
        option.value = pkg.value;
        // 根據不同遊戲顯示不同格式
        let displayText = '';
        switch(game) {
            case 'eternal-return':
                displayText = `${pkg.crystals} ${gameInfo.currency} (NT$${pkg.price})`;
                break;
            case 'honkai-star-rail':
                displayText = `${pkg.crystals}枚${gameInfo.currency} (NT$${pkg.price})`;
                break;
            case 'azur-lane':
                displayText = `${pkg.value}${gameInfo.currency} (NT$${pkg.price})`;
                break;
            case 'arknights':
                displayText = `開採${pkg.value}${gameInfo.currency} (NT$${pkg.price})`;
                break;
            default:
                displayText = `${pkg.crystals} ${gameInfo.currency} (NT$${pkg.price})`;
        }
        option.textContent = displayText;
        rechargeSelect.appendChild(option);
    });
}

// 輔助函數：更新輸入框的值和單位
function updateInputWithUnit(id, value, unit) {
    const container = document.getElementById(id).closest('.input-container');
    const input = container.querySelector('input');
    const unitSpan = container.querySelector('.unit');
    
    input.value = value;
    if (unitSpan) {
        unitSpan.textContent = unit;
    }
}

function updateProbabilityDisplay() {
    // ... 現有的updateProbabilityDisplay函數代碼 ...
}

// 修改機率計算函數
function calculateProbability(pulls, gameInfo) {
    const baseRate = gameInfo.baseRate / 100;  // 0.6% -> 0.006
    const upRate = gameInfo.rateUp / 100;      // 50% -> 0.5
    let probability = 0;
    
    if (gameInfo.characterPity > 0) {
        // 計算完整保底週期數
        const fullCycles = Math.floor(pulls / gameInfo.characterPity);
        const remainingPulls = pulls % gameInfo.characterPity;
        
        // 完整週期必定出貨的機率
        if (fullCycles > 0) {
            probability = 1 - Math.pow(1 - 1, fullCycles); // 每個完整週期必定出貨
        }
        
        // 計算剩餘抽數的機率
        if (remainingPulls > 0) {
            let cycleProb = 0;
            for (let i = 1; i <= remainingPulls; i++) {
                let currentRate = baseRate;
                
                // 改進的軟保底機制
                if (gameInfo.softPity > 0 && i >= gameInfo.softPity) {
                    // 每次增加基礎機率的33.3%
                    const softPityBonus = baseRate * 0.333 * (i - gameInfo.softPity + 1);
                    currentRate = Math.min(1, baseRate + softPityBonus);
                }
                
                // 考慮UP率
                currentRate *= upRate;
                
                // 當前抽的機率
                const pullProb = (1 - cycleProb) * currentRate;
                cycleProb += pullProb;
            }
            
            // 合併剩餘抽數的機率
            probability = probability + (1 - probability) * cycleProb;
        }
    } else {
        // 無保底情況
        const singlePullRate = baseRate * upRate;
        probability = 1 - Math.pow(1 - singlePullRate, pulls);
    }
    
    return probability;
}

// 計算期望抽數（考慮軟保底和保底機制）
function calculateExpectedPulls(gameInfo) {
    const baseRate = gameInfo.baseRate / 100;  // 0.6% -> 0.006
    const upRate = gameInfo.rateUp / 100;      // 50% -> 0.5
    let totalProb = 0;
    let expectedPulls = 0;
    
    // 考慮軟保底前的抽數
    for (let i = 1; i < gameInfo.softPity; i++) {
        const pullRate = baseRate * upRate;
        const pullProb = (1 - totalProb) * pullRate;
        expectedPulls += i * pullProb;
        totalProb += pullProb;
    }
    
    // 考慮軟保底後到保底前的抽數
    for (let i = gameInfo.softPity; i < gameInfo.characterPity; i++) {
        // 軟保底機制：每抽增加6%的基礎機率
        const softPityRate = Math.min(1, baseRate + (i - gameInfo.softPity + 1) * 0.06);
        const pullRate = softPityRate * upRate;
        const pullProb = (1 - totalProb) * pullRate;
        expectedPulls += i * pullProb;
        totalProb += pullProb;
    }
    
    // 考慮保底
    if (totalProb < 1) {
        expectedPulls += gameInfo.characterPity * (1 - totalProb);
    }
    
    return Math.round(expectedPulls);
}

// 計算指定機率所需抽數
function calculateRequiredPulls(targetProbability, gameInfo) {
    const baseRate = gameInfo.baseRate / 100;
    const upRate = gameInfo.rateUp / 100;
    let totalProb = 0;
    let pulls = 0;
    
    while (totalProb < targetProbability && pulls < gameInfo.characterPity) {
        pulls++;
        let currentRate = baseRate;
        
        // 考慮軟保底
        if (pulls >= gameInfo.softPity) {
            // 軟保底後每抽增加6%的基礎機率
            currentRate = Math.min(1, baseRate + (pulls - gameInfo.softPity + 1) * 0.06);
        }
        
        const pullRate = currentRate * upRate;
        totalProb = 1 - Math.pow(1 - pullRate, pulls);
    }
    
    return Math.min(pulls, gameInfo.characterPity);
}

function calculateWorstCase(gameInfo, targetCount, currentPity) {
    if (gameInfo.characterPity > 0) {
        // 考慮當前保底進度
        const remainingPulls = gameInfo.characterPity - currentPity;
        return remainingPulls + (gameInfo.characterPity * (targetCount - 1));
    }
    return Infinity;
}

// 修改成本計算函數
function calculateCost() {
    try {
        const game = document.getElementById('game').value;
        const gameInfo = gameData[game];
        const discountRate = parseFloat(document.getElementById('discount-rate').value) / 100;
        
        // 計算各種情況的抽數
        const expectedPulls = calculateExpectedPulls(gameInfo);  // 期望抽數
        const pulls50 = calculateRequiredPulls(0.5, gameInfo);   // 50%機率
        const pulls75 = calculateRequiredPulls(0.75, gameInfo);  // 75%機率
        const worstCase = gameInfo.characterPity;                // 保底
        
        // 計算成本
        const results = [
            {
                name: "期望抽數",
                description: "平均情況",
                pulls: expectedPulls,
                probability: "-"
            },
            {
                name: "樂觀預期",
                description: "50%機率內",
                pulls: pulls50,
                probability: "50%"
            },
            {
                name: "較佳預期",
                description: "75%機率內",
                pulls: pulls75,
                probability: "75%"
            },
            {
                name: "保底情況",
                description: "最差情況",
                pulls: worstCase,
                probability: "100%"
            }
        ].map(result => {
            const currencyCost = result.pulls * gameInfo.pullCost;
            const officialCost = calculateOfficialCost(currencyCost, gameInfo.packages);
            const mepayCost = Math.floor(officialCost * (1 - discountRate));
            
            return {
                ...result,
                currencyCost,
                officialCost,
                mepayCost,
                savings: officialCost - mepayCost
            };
        });
        
        // 修改結果HTML模板，確保使用正確的貨幣名稱
        const resultHtml = `
            <div class="results-container">
                <div class="result-section">
                    <h3>抽卡分析與成本預估</h3>
                    <div class="probability-explanation">
                        <p>基礎機率：${formatPercentage(gameInfo.baseRate/100)} (UP率：${formatPercentage(gameInfo.rateUp/100)})</p>
                        <p>軟保底：${gameInfo.softPity}抽後機率逐漸提升</p>
                        <p>硬保底：${gameInfo.characterPity}抽保證出貨</p>
                    </div>
                    
                    <table class="result-table">
                        <thead>
                            <tr>
                                <th>情況</th>
                                <th>抽數</th>
                                <th>機率</th>
                                <th>所需${gameInfo.currency}</th>
                                <th>官方價格</th>
                                <th>MEPay價格</th>
                                <th>節省金額</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${results.map(result => `
                                <tr>
                                    <td title="${result.description}">${result.name}</td>
                                    <td>${formatNumber(result.pulls)}抽</td>
                                    <td>${result.probability}</td>
                                    <td>${formatNumber(result.currencyCost)}</td>
                                    <td>${formatCurrency(result.officialCost)}</td>
                                    <td>${formatCurrency(result.mepayCost)}</td>
                                    <td class="savings">${formatCurrency(result.savings)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                    
                    <div class="probability-notes">
                        <h4>說明</h4>
                        <ul>
                            <li>期望抽數：平均情況下需要的抽數，考慮了所有機制的綜合影響</li>
                            <li>樂觀預期：有一半機會在這個抽數內出貨</li>
                            <li>較佳預期：有75%機會在這個抽數內出貨</li>
                            <li>保底情況：最壞情況下的保證出貨抽數</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        // 顯示結果
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = resultHtml;
        resultsDiv.style.display = 'block';
        
    } catch (error) {
        console.error('計算錯誤:', error);
        showError(error.message);
    }
}

// 新增：生成遊戲特定的保底機制說明
function generatePityExplanation(gameInfo) {
    if (!gameInfo.characterPity) {
        return `<p class="pity-explanation">此遊戲無保底機制</p>`;
    }
    
    let explanation = `<div class="pity-explanation">
        <p>保底機制：${gameInfo.characterPity}抽必出SSR</p>`;
    
    if (gameInfo.softPity) {
        explanation += `<p>軟保底：從第${gameInfo.softPity}抽開始，出貨率逐漸提升</p>`;
    }
    
    explanation += '</div>';
    return explanation;
}

// 優化價格計算函數
function calculateOfficialCost(currencyCost, packages) {
    let totalCost = 0;
    let remainingCurrency = currencyCost;
    
    // 從大到小排序套餐，考慮總結晶數（包含獎勵）
    const sortedPackages = [...packages].sort((a, b) => {
        const aTotal = a.crystals + a.bonus;
        const bTotal = b.crystals + b.bonus;
        return (bTotal / b.price) - (aTotal / a.price);
    });
    
    // 優先使用性價比最高的套餐
    for (const pkg of sortedPackages) {
        const totalCrystals = pkg.crystals + pkg.bonus;
        while (remainingCurrency >= totalCrystals) {
            totalCost += pkg.price;
            remainingCurrency -= totalCrystals;
        }
    }
    
    // 如果還有剩餘，買最小的套餐
    if (remainingCurrency > 0) {
        const smallestPackage = sortedPackages[sortedPackages.length - 1];
        totalCost += smallestPackage.price;
    }
    
    return totalCost;
}

function calculateMepayCost(currencyCost, packages) {
    const discountRate = parseFloat(document.getElementById('discount-rate').value);
    if (isNaN(discountRate) || discountRate < 0 || discountRate > 100) {
        throw new Error('折扣率必須在0-100之間');
    }
    return calculateOfficialCost(currencyCost, packages) * (1 - discountRate / 100);
}

// 生成結果HTML
function generateResultHtml(data) {
    return `
        <div class="results-container">
            <div class="result-section">
                <h3>抽卡成本分析</h3>
                <table class="result-table">
                    <thead>
                        <tr>
                            <th>機率/價格</th>
                            <th>抽數</th>
                            <th>所需${data.currency}</th>
                            <th>官方價格</th>
                            <th>MEPay價格</th>
                            <th>節省金額</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="probability-row">
                            <td>50%機率</td>
                            <td>${formatNumber(data.pulls50Percent)}抽</td>
                            <td>${formatNumber(data.currencyCost50)}</td>
                            <td>${formatCurrency(data.officialCost50)}</td>
                            <td>${formatCurrency(data.mepayCost50)}</td>
                            <td class="savings">${formatCurrency(data.officialCost50 - data.mepayCost50)}</td>
                        </tr>
                        <tr class="probability-row">
                            <td>90%機率</td>
                            <td>${formatNumber(data.pulls90Percent)}抽</td>
                            <td>${formatNumber(data.currencyCost90)}</td>
                            <td>${formatCurrency(data.officialCost90)}</td>
                            <td>${formatCurrency(data.mepayCost90)}</td>
                            <td class="savings">${formatCurrency(data.officialCost90 - data.mepayCost90)}</td>
                        </tr>
                        <tr class="probability-row">
                            <td>保底</td>
                            <td>${formatNumber(data.pullsWorst)}抽</td>
                            <td>${formatNumber(data.currencyCostWorst)}</td>
                            <td>${formatCurrency(data.officialCostWorst)}</td>
                            <td>${formatCurrency(data.mepayCostWorst)}</td>
                            <td class="savings">${formatCurrency(data.officialCostWorst - data.mepayCostWorst)}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="package-notes">
                    <p>※首儲全體一輪，原價是8663 NT，26160${data.currency}，換算為：163.5抽。</p>
                    <p>※創世結晶與原石可以1比1免換。創世結晶可以購買一些時裝或道具，反之原石不行。</p>
                    <p>※首儲雙倍刷新，目前都在新版本的X.1會重置。例如：3.1、4.1。即：每年的9月28日。</p>
                    <p>一切還是以官方公告為主。</p>
                </div>
            </div>
        </div>
    `;
}

// 錯誤處理
function showError(message) {
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        background-color: #ff4444;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: fadeIn 0.3s ease-out;
    `;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => errorDiv.remove(), 300);
    }, 3000);
}

// 初始化頁面
window.onload = function() {
    updateGameOptions();
}; 

// 添加樣式
const style = `
<style>
    .price-discount {
        background: linear-gradient(145deg, #2d2d2d, #252525);
        border-radius: 12px;
        padding: 25px;
        margin-bottom: 25px;
    }

    .price-discount .form-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
        margin-bottom: 20px;
    }

    .price-discount .form-group {
        position: relative;
    }

    .price-discount label {
        display: block;
        color: #00bcd4;
        font-size: 13px;
        margin-bottom: 8px;
        font-weight: 500;
    }

    .select-container {
        position: relative;
        background: #1e1e1e;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .select-container select {
        width: 100%;
        background: transparent;
        border: none;
        color: #e0e0e0;
        font-size: 14px;
        padding: 12px;
        padding-right: 40px;
        appearance: none;
        -webkit-appearance: none;
        cursor: pointer;
    }

    .select-container::after {
        content: '';
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        width: 10px;
        height: 10px;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300bcd4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-size: contain;
        pointer-events: none;
    }

    .input-container {
        position: relative;
        background: #1e1e1e;
        border-radius: 8px;
        padding: 8px 12px;
        display: flex;
        align-items: center;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .input-container input {
        width: 100%;
        background: transparent;
        border: none;
        color: #e0e0e0;
        font-size: 14px;
        padding: 4px;
        text-align: right;
    }

    .input-container .unit {
        color: #666;
        font-size: 13px;
        margin-left: 8px;
        min-width: 24px;
    }

    /* 懸浮和焦點效果 */
    .select-container:hover,
    .input-container:hover {
        border-color: rgba(0, 188, 212, 0.3);
        background: #222;
    }

    .select-container:focus-within,
    .input-container:focus-within {
        border-color: #00bcd4;
        box-shadow: 0 0 0 1px #00bcd4;
        background: #252525;
    }

    /* 下拉選項樣式 */
    select option {
        background-color: #1e1e1e;
        color: #e0e0e0;
        padding: 8px;
    }

    /* 響應式設計 */
    @media (max-width: 1200px) {
        .price-discount .form-row {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .price-discount .form-row {
            grid-template-columns: 1fr;
        }
    }

    /* 機率說明區塊樣式 */
    .probability-explanation {
        background: rgba(0, 188, 212, 0.05);
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 20px;
    }

    .probability-explanation p {
        margin: 5px 0;
        color: var(--text-primary);
    }

    .pity-explanation {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .probability-notes {
        margin-top: 25px;
        padding: 20px;
        background: rgba(0, 188, 212, 0.05);
        border-radius: 8px;
    }

    .probability-notes h4 {
        color: var(--primary);
        margin-bottom: 15px;
    }

    .probability-notes ul {
        list-style-type: none;
        padding: 0;
    }

    .probability-notes li {
        margin-bottom: 10px;
        padding-left: 20px;
        position: relative;
    }

    .probability-notes li:before {
        content: "•";
        position: absolute;
        left: 0;
        color: var(--primary);
    }
</style>
`;

// 將樣式添加到頁面
document.head.insertAdjacentHTML('beforeend', style);

// 更新特殊獎勵輸入欄位
function updateBonusInput() {
    try {
        const bonusType = document.getElementById('special-bonus').value;
        let customBonusDiv = document.getElementById('custom-bonus-container');
        const game = document.getElementById('game').value;
        const gameInfo = gameData[game];
        
        console.log('獎勵類型:', bonusType); // 除錯用
        
        if (bonusType === 'custom') {
            // 更新或創建自定義獎勵輸入區域
            if (!customBonusDiv) {
                customBonusDiv = document.createElement('div');
                customBonusDiv.id = 'custom-bonus-container';
            }
            
            customBonusDiv.className = 'form-group';
            customBonusDiv.innerHTML = `
                <div class="form-row">
                    <div class="form-group">
                        <label for="custom-bonus">自定義額外獎勵</label>
                        <div class="input-container">
                            <input type="number" id="custom-bonus" min="0" value="0">
                            <span class="unit">${gameInfo.currency}</span>
                        </div>
                    </div>
                </div>
            `;
            
            // 插入到特殊獎勵選擇下方
            const specialBonusSelect = document.getElementById('special-bonus');
            specialBonusSelect.parentNode.parentNode.after(customBonusDiv);
            customBonusDiv.style.display = 'block';
        } else {
            // 隱藏自定義獎勵輸入
            if (customBonusDiv) {
                customBonusDiv.style.display = 'none';
            }
        }
    } catch (error) {
        console.error('更新獎勵輸入錯誤:', error);
    }
}

// 計算實際獲得的貨幣數量
function calculateActualCurrency(baseCurrency, bonusType, customBonus = 0) {
    switch (bonusType) {
        case 'first-time':
            return baseCurrency * 2; // 首儲雙倍
        case 'custom':
            return baseCurrency + (customBonus || 0); // 基礎 + 自定義額外獎勵
        case 'none':
        default:
            return baseCurrency; // 無額外獎勵
    }
}

// 修改主計算函數
function calculateProbabilityAndCost() {
    try {
        const game = document.getElementById('game').value;
        const gameInfo = gameData[game];
        const discountRate = parseFloat(document.getElementById('discount-rate').value) / 100;
        const bonusType = document.getElementById('special-bonus').value;
        
        console.log('計算開始:', {game, bonusType, discountRate}); // 除錯用
        
        // 獲取自定義獎勵數值（如果有的話）
        let customBonus = 0;
        if (bonusType === 'custom') {
            const customBonusInput = document.getElementById('custom-bonus');
            if (customBonusInput) {
                customBonus = parseFloat(customBonusInput.value) || 0;
            }
        }
        
        const analyses = [
            { pulls: 10 },
            { pulls: 50 },
            { pulls: 90 },
            { pulls: 180 }
        ];
        
        const results = analyses.map(analysis => {
            const probability = calculateProbability(analysis.pulls, gameInfo);
            const baseCurrencyCost = analysis.pulls * gameInfo.pullCost;
            const actualCurrency = calculateActualCurrency(baseCurrencyCost, bonusType, customBonus);
            
            // 計算實際所需支付的金額
            const officialCost = calculateOfficialCost(baseCurrencyCost, gameInfo.packages);
            const mepayCost = Math.floor(officialCost * (1 - discountRate));
            
            return {
                pulls: analysis.pulls,
                probability,
                currencyCost: baseCurrencyCost,
                actualCurrency,
                officialCost,
                mepayCost,
                savings: officialCost - mepayCost
            };
        });
        
        // 生成結果HTML
        const resultHtml = `
            <div class="results-container">
                <div class="result-section">
                    <h3>抽卡成本＆機率分析</h3>
                    <table class="result-table">
                        <thead>
                            <tr>
                                <th>抽數</th>
                                <th>出貨機率</th>
                                <th>所需${gameInfo.currency}</th>
                                <th>實際獲得${gameInfo.currency}</th>
                                <th>官方價格</th>
                                <th>MEPay價格</th>
                                <th>節省金額</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${results.map(result => `
                                <tr>
                                    <td>${result.pulls}抽</td>
                                    <td>${formatPercentage(result.probability)}</td>
                                    <td>${formatNumber(result.currencyCost)}</td>
                                    <td>${formatNumber(result.actualCurrency)}</td>
                                    <td>${formatCurrency(result.officialCost)}</td>
                                    <td>${formatCurrency(result.mepayCost)}</td>
                                    <td class="savings">${formatCurrency(result.savings)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
        
        // 顯示結果
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = resultHtml;
        resultsDiv.style.display = 'block';
        
    } catch (error) {
        console.error('計算錯誤:', error);
        showError(error.message);
    }
}

// 頁面載入時初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化特殊獎勵選擇
    updateBonusInput();
    
    // 添加事件監聽器
    document.getElementById('special-bonus').addEventListener('change', updateBonusInput);
}); 