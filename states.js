function showTooltip(text) {
                              const stateInfo = document.getElementById('state-info');
                              stateInfo.textContent = text;
                              stateInfo.style.display = 'block';
                              
                            const x = event.clientX + 10;
                            const y = event.clientY + 10;
                          
                            stateInfo.style.left = `${x}px`;
                            stateInfo.style.top = `${y}px`;
                            }
                            
                            function hideTooltip() {
                              const stateInfo = document.getElementById('state-info');
                              stateInfo.style.display = 'none';
                            }
