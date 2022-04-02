const url = 'data.json';

export const fetchData = async (section) => {
    section.innerHTML = `<i class="fas fa-chevron-right></i>`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(error){
        console.log(error)
    }
    
}

