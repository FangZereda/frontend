
const API_BASE = 'https://pokeapi.co/api/v2/pokemon';
const cardsContainer = document.getElementById('cardsContainer');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const loadMoreBtn = document.getElementById('loadMore');
const searchInput = document.getElementById('search');

let offset = 0;
const limit = 12; 
let lastQuery = '';
let isSearching = false;

async function fetchPokemonList(offset = 0, limit = 12) {
  const url = `${API_BASE}?offset=${offset}&limit=${limit}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Erro ao carregar lista: ${res.statusText}`);
  return res.json();
}

async function fetchPokemonDetails(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Erro ao carregar detalhes: ${res.statusText}`);
  return res.json();
}

async function loadPokemonBatch() {
  try {
    loadingEl.hidden = false;
    const data = await fetchPokemonList(offset, limit);

    const promises = data.results.map(async (pokemon) => {
      const details = await fetchPokemonDetails(pokemon.url);
      return {
        name: details.name,
        image: details.sprites.front_default,
        types: details.types.map(t => t.type.name).join(', ')
      };
    });

    const pokemons = await Promise.all(promises);
    pokemons.forEach(createAndAppendCard);

    offset += limit;
    loadMoreBtn.disabled = (offset >= data.count);
    if (loadMoreBtn.disabled) loadMoreBtn.textContent = 'Sem mais Pokémon';

  } catch (err) {
    errorEl.hidden = false;
    errorEl.textContent = err.message;
  } finally {
    loadingEl.hidden = true;
  }
}

function createAndAppendCard({ name, image, types }) {
  const card = document.createElement('article');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = image || '';
  img.alt = name;

  const h3 = document.createElement('h3');
  h3.textContent = name;

  const p = document.createElement('p');
  p.textContent = `Tipo: ${types}`;

  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(p);

  cardsContainer.appendChild(card);
}

// Atualiza busca (exemplo filtrando no frontend)
searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const visible = card.querySelector('h3').textContent.includes(q);
    card.style.display = visible ? '' : 'none';
  });
});

// Load inicial e botão mais
loadMoreBtn.addEventListener('click', loadPokemonBatch);
loadPokemonBatch();
