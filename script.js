const movies = [
    {
        id: 1,
        title: "World War Z",
        genre: "Action",
        rating: 7.0,
        year: 2013,
        poster: "IMG/Poster film/action/World War Z.jpeg",
        synopsis: "Mantan karyawan Perserikatan Bangsa-Bangsa, Gerry Lane, menjelajahi dunia dalam perlombaan melawan waktu untuk menghentikan pandemi zombie yang menggulingkan tentara dan pemerintahan serta mengancam untuk menghancurkan umat manusia itu sendiri.",
        director: "Marc Forster",
        writer: "Matthew Michael Carnahan, Drew Goddard, dan Damon Lindelof",
        cast: [
            {name: "Brad Pitt", photo: "IMG/Cast/World War Z/Brad Pitt.jpeg"},
            {name: "Danielle Kertesz", photo: "IMG/Cast/World War Z/Danielle Kertesz.jpeg"},
            {name: "Elyes Gabel", photo: "IMG/Cast/World War Z/Elyes Gabel.jpeg"},
            {name: "James Badge Dale", photo: "IMG/Cast/World War Z/James Badge Dale.jpeg"},
            {name: "Mireille Enos", photo: "IMG/Cast/World War Z/Mireille Enos.jpeg"}
        ]
    },
    {
        id: 2,
        title: "The Hangover",
        genre: "Comedy",
        rating: 7.7,
        year: 2009,
        poster: "IMG/Poster film/comedy/The Hangover.jpeg",
        synopsis: "Tiga sahabat terbangun setelah pesta lajang di Las Vegas tanpa ingatan tentang kejadian semalam, sementara sang calon pengantin pria menghilang. Mereka harus menjelajahi kota demi menemukan teman mereka tepat waktu untuk acara pernikahannya.",
        director: "Todd Philips",
        writer: "John Lucas dan Scott Moore",
        cast: [
            {name: "Bradley Cooper", photo: "IMG/Cast/The Hangover/Bradley Cooper.jpeg"},
            {name: "Ed Helms", photo: "IMG/Cast/The Hangover/Ed Helms.jpeg"},
            {name: "Justin Bartha", photo: "IMG/Cast/The Hangover/Justin Bartha.jpeg"},
            {name: "Ken Jeong", photo: "IMG/Cast/The Hangover/Ken Jeong.jpeg"},
            {name: "Zach Galifianakis", photo: "IMG/Cast/The Hangover/Zach Galifianakis.jpeg"}
        ]
    },
    {
        id: 3,
        title: "Fight Club",
        genre: "Mystery",
        rating: 8.8,
        year: 1999,
        poster: "IMG/Poster film/mystery/Fight Club.jpeg",
        synopsis: "Seorang pekerja kantoran yang menderita insomnia dan seorang pembuat sabun yang cuek membentuk klub pertarungan bawah tanah yang kemudian berkembang menjadi sesuatu yang jauh lebih besar.",
        director: "David Fincher",
        writer: "Chuck Palahniuk dan Jim Uhls",
        cast: [
            {name: "Brad Pitt", photo: "IMG/Cast/Fight Club/Brad Pitt.jpeg"},
            {name: "Edward Norton", photo: "IMG/Cast/Fight Club/Edward Norton.jpeg"},
            {name: "Helena Bonham Carter", photo: "IMG/Cast/Fight Club/Helena Bonham Carter.jpeg"},
            {name: "Holt Mccallany", photo: "IMG/Cast/Fight Club/Holt Mccallany.jpeg"},
            {name: "Jared Leto", photo: "IMG/Cast/Fight Club/Jared Leto.jpeg"}
        ]
    },
    {
        id: 4,
        title: "Interstellar",
        genre: "Sci-Fi",
        rating: 8.7,
        year: 2014,
        poster: "IMG/Poster film/scifi/Interstellar.jpeg",
        synopsis: "Di masa depan distopia di mana Bumi hampir tidak layak huni, sebuah tim astronot memulai misi untuk menemukan rumah baru bagi umat manusia.",
        director: "Christopher Nolan",
        writer: "Jonathan Nolan dan Christopher Nolan",
        cast: [
            {name: "Anne Hathaway", photo: "IMG/Cast/Interstellar/Anne Hathaway.jpeg"},
            {name: "Jessica Chastain", photo: "IMG/Cast/Interstellar/Jessica Chastain.jpeg"},
            {name: "Matt Damon", photo: "IMG/Cast/Interstellar/Matt Damon.jpeg"},
            {name: "Matthew McConaughey", photo: "IMG/Cast/Interstellar/Matthew McConaughey.jpeg"},
            {name: "Michael Caine", photo: "IMG/Cast/Interstellar/Michael Caine.jpeg"}
        ]
    },
    {
        id: 5,
        title: "Casino Royale",
        genre: "Action",
        rating: 8.0,
        year: 2006,
        poster: "IMG/Poster film/action/Casino Royale.jpeg",
        synopsis: "Setelah mendapatkan izin untuk membunuh, agen rahasia James Bond memulai misi pertamanya sebagai 007. Bond harus mengalahkan seorang bankir swasta yang mendanai teroris dalam permainan poker berisiko tinggi di Casino Royale, Montenegro.",
        director: "Martin Campbell",
        writer: "Neal Purvis, Robert Wade, dan Paul Haggis",
        cast: [
            {name: "Daniel Craig", photo: "IMG/Cast/Casino Royal/Daniel Craig.jpeg"},
            {name: "Eva Green", photo: "IMG/Cast/Casino Royal/Eva Green.jpeg"},
            {name: "Jeffrey Wright", photo: "IMG/Cast/Casino Royal/Jeffrey Wright.jpeg"},
            {name: "Judi Dench", photo: "IMG/Cast/Casino Royal/Judi Dench.jpeg"},
            {name: "Mads Mikkelsen", photo: "IMG/Cast/Casino Royal/Mads Mikkelsen.jpeg"}
        ]
    },
    {
        id: 6,
        title: "Grown Ups",
        genre: "Comedy",
        rating: 6.0,
        year: 2010,
        poster: "IMG/Poster film/comedy/Grown Ups.jpeg",
        synopsis: "Setelah pelatih bola basket SMA mereka meninggal dunia, lima sahabat dan mantan rekan satu tim berkumpul kembali untuk liburan akhir pekan Hari Kemerdekaan Amerika Serikat (4 Juli).",
        director: "Dennis Dugan",
        writer: "Adam Sandler dan Fred Wolf",
        cast: [
            {name: "Adam Sandler", photo: "IMG/Cast/Grown Ups/Adam Sandler.jpeg"},
            {name: "Chris Rock", photo: "IMG/Cast/Grown Ups/Chris Rock.jpeg"},
            {name: "David Spade", photo: "IMG/Cast/Grown Ups/David Spade.jpeg"},
            {name: "Kevin James", photo: "IMG/Cast/Grown Ups/Kevin James.jpeg"},
            {name: "Rob Schneider", photo: "IMG/Cast/Grown Ups/Rob Schneider.jpeg"}
        ]
    },
    {
        id: 7,
        title: "Shutter Island",
        genre: "Mystery",
        rating: 8.2,
        year: 2010,
        poster: "IMG/Poster film/mystery/Shutter Island.jpeg",
        synopsis: "Dua marshal AS dikirim ke sebuah rumah sakit jiwa di sebuah pulau terpencil untuk menyelidiki hilangnya seorang pasien.",
        director: "Martin Scorsese",
        writer: "Laeta Kalogridis dan Dennis Lehane",
        cast: [
            {name: "Ben Kingsley", photo: "IMG/Cast/Shutter Island/Ben Kingsley.jpeg"},
            {name: "Emily Mortimer", photo: "IMG/Cast/Shutter Island/Emily Mortimer.jpeg"},
            {name: "Leonardo DiCaprio", photo: "IMG/Cast/Shutter Island/Leonardo DiCaprio.jpeg"},
            {name: "Mark Ruffalo", photo: "IMG/Cast/Shutter Island/Mark Ruffalo.jpeg"},
            {name: "Michelle Williams", photo: "IMG/Cast/Shutter Island/Michelle Williams.jpeg"}
        ]
    },
    {
        id: 8,
        title: "Predestination",
        genre: "Sci-Fi",
        rating: 7.4,
        year: 2014,
        poster: "IMG/Poster film/scifi/Predestination.jpeg",
        synopsis: "Sebagai tugas terakhirnya, seorang agen temporal ditugaskan untuk melakukan perjalanan kembali ke masa lalu dan mencegah serangan bom di New York pada tahun 1975. Namun, perburuan tersebut ternyata berada di luar batas kemungkinan.",
        director: "Michael Spierig dan Peter Spierig",
        writer: "Michael Spierig, Peter Spierig, dan Robert A. Heinlein",
        cast: [
            {name: "Ethan Hawke", photo: "IMG/Cast/Predestination/Ethan Hawke.jpeg"},
            {name: "Madeleine West", photo: "IMG/Cast/Predestination/Madeleine West.jpeg"},
            {name: "Noah Taylor", photo: "IMG/Cast/Predestination/Noah Taylor.jpeg"},
            {name: "Olivia Sprague", photo: "IMG/Cast/Predestination/Olivia Sprague.jpeg"},
            {name: "Sarah Snook", photo: "IMG/Cast/Predestination/Sarah Snook.jpeg"}
        ]
    },
    {
        id: 9,
        title: "Shaft",
        genre: "Action",
        rating: 6.4,
        year: 2019,
        poster: "IMG/Poster film/action/Shaft.jpeg",
        synopsis: "JJ Shaft, seorang pakar keamanan siber dengan gelar dari MIT, meminta bantuan keluarganya untuk mengungkap kebenaran di balik kematian mendadak sahabatnya.",
        director: "Tim Story",
        writer: "Ernest Tidyman, Kenya Barris, dan Alex Barnow",
        cast: [
            {name: "Alexandra Shipp", photo: "IMG/Cast/Shaft/Alexandra Shipp.jpeg"},
            {name: "Jessie T. Usher", photo: "IMG/Cast/Shaft/Jessie T. Usher.jpeg"},
            {name: "Regina Hall", photo: "IMG/Cast/Shaft/Regina Hall.jpeg"},
            {name: "Richard Roundtree", photo: "IMG/Cast/Shaft/Richard Roundtree.jpeg"},
            {name: "Samuel L. Jackson", photo: "IMG/Cast/Shaft/Samuel L. Jackson.jpeg"}
        ]
    },
    {
        id: 10,
        title: "The Fall Guy",
        genre: "Comedy",
        rating: 6.8,
        year: 2024,
        poster: "IMG/Poster film/comedy/The Fall Guy.jpeg",
        synopsis: "Seorang pemeran pengganti, yang baru saja mengalami kecelakaan yang hampir mengakhiri kariernya, harus melacak seorang bintang film yang hilang, memecahkan sebuah konspirasi, dan mencoba merebut kembali cinta dalam hidupnya sambil tetap menjalankan pekerjaan utamanya.",
        director: "David Leitch",
        writer: "Glen A. Larson dan Drew Pearce",
        cast: [
            {name: "Aaron Taylor-Johnson", photo: "IMG/Cast/The Fall Guy/Aaron Taylor-Johnson.jpeg"},
            {name: "Emily Blunt", photo: "IMG/Cast/The Fall Guy/Emily Blunt.jpeg"},
            {name: "Hannah Waddingham", photo: "IMG/Cast/The Fall Guy/Hannah Waddingham.jpeg"},
            {name: "Ryan Gosling", photo: "IMG/Cast/The Fall Guy/Ryan Gosling.jpeg"},
            {name: "Winston Duke", photo: "IMG/Cast/The Fall Guy/Winston Duke.jpeg"}
        ]
    },
    {
        id: 11,
        title: "Knives Out",
        genre: "Mystery",
        rating: 7.9,
        year: 2019,
        poster: "IMG/Poster film/mystery/Knives Out.jpeg",
        synopsis: "Ketika novelis kriminal terkenal Harlan Thrombey ditemukan tewas di kediamannya tepat setelah ulang tahunnya yang ke-85, Detektif Benoit Blanc yang ingin tahu dan ramah secara misterius ditugaskan untuk menyelidiki kasus tersebut.",
        director: "Rian Johnson",
        writer: "Rian Johnson",
        cast: [
            {name: "Ana de Armas", photo: "IMG/Cast/Knives Out/Ana de Armas.jpeg"},
            {name: "Chris Evans", photo: "IMG/Cast/Knives Out/Chris Evans.jpeg"},
            {name: "Christopher Plummer", photo: "IMG/Cast/Knives Out/Christopher Plummer.jpeg"},
            {name: "Daniel Craig", photo: "IMG/Cast/Knives Out/Daniel Craig.jpeg"},
            {name: "Michael Shannon", photo: "IMG/Cast/Knives Out/Michael Shannon.jpeg"}
        ]
    },
    {
        id: 12,
        title: "Cloverfield",
        genre: "Sci-Fi",
        rating: 7.9,
        year: 2008,
        poster: "IMG/Poster film/scifi/Cloverfield.jpeg",
        synopsis: "Sekelompok teman nekat menyusuri jalanan New York dalam misi penyelamatan saat terjadi serangan monster yang mengamuk.",
        director: "Matt Reeves",
        writer: "Drew Goddard",
        cast: [
            {name: "Elizabeth Anne Caplan", photo: "IMG/Cast/Cloverfield/Elizabeth Anne Caplan.jpeg"},
            {name: "Jessica Lucas", photo: "IMG/Cast/Cloverfield/Jesicca Lucas.jpeg"},
            {name: "Michael Stahl-David", photo: "IMG/Cast/Cloverfield/Michael Stahl-David.jpeg"},
            {name: "Odette Annable", photo: "IMG/Cast/Cloverfield/Odette Annable.jpeg"},
            {name: "TJ Miller", photo: "IMG/Cast/Cloverfield/TJ Miller.jpeg"}
        ]
    }
];

// -------

let watchlist = [];

let currentGenre = "All";
let currentSearch = "";

let currentDetailId = null;

let toastTimeout;

// --------

function showSection(target) {
    document.getElementById("homeSection").classList.add("hidden");
    document.getElementById("detailSection").classList.add("hidden");
    document.getElementById("watchlistSection").classList.add("hidden");
    document.getElementById(target + "Section").classList.remove("hidden");
}

function setNavAktif (activeId) {
    document.querySelectorAll(".nav-link").forEach(link => {link.classList.remove("active");
    });
    document.getElementById(activeId).classList.add("active");
}

document.getElementById("navHome").addEventListener("click", (e) => {
    e.preventDefault();
    showSection("home");
    setNavAktif("navHome");
});

document.getElementById("navWatchlist").addEventListener("click", (e) => {
    e.preventDefault();
    showSection("watchlist");
    setNavAktif("navWatchlist");
    renderWatchlist();
});

document.getElementById("backToHome").addEventListener("click", (e) => {
    e.preventDefault();
    showSection("home");
    setNavAktif("navHome");
});

// ---------

function renderMovie(movieList) {
    const container = document.getElementById("movieContainer");
    container.innerHTML = "";

    if (movieList.length === 0) {
        container.innerHTML = `<p class="empty-state">Film tidak ditemukan</p>`;
        return;
    }

    movieList.forEach(movie => {
        const inWatchlist = isInWatchlist(movie.id);
        const activeClass = inWatchlist ? "active" : "";

        container.innerHTML += `
        <article class="movie-card" data-id="${movie.id}">
            <div class="poster-wrapper">
                <img src="${movie.poster}" alt="Poster film ${movie.title}">
                <button class="watchlist-btn ${activeClass}" aria-label="Tambah ${movie.title} ke watchlist"><i class="ti ti-heart"></i>
                </button>
            </div>
            <h3>${movie.title}</h3>
            <p class="info"><span class="star">&#9733;</span> ${movie.rating} &middot; ${movie.year}</p>
        </article>`;
    });

    document.querySelectorAll(".poster-wrapper").forEach(poster => {
        poster.addEventListener("click", () => {
            const id = Number(poster.closest(".movie-card").dataset.id);
            openDetail(id);
        });
    });

    document.querySelectorAll(".movie-card .watchlist-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = Number(btn.closest(".movie-card").dataset.id);
            toggleWatchlist(id);
        });
    });
}

// --------

function getFilteredMovies() {
    return movies.filter(movie => {
        const matchGenre = currentGenre === "All" || movie.genre === currentGenre;
        const matchSearch = movie.title.toLowerCase().includes(currentSearch);
        return matchGenre && matchSearch;
    });
}

function applyFilter() {
    const filtered = getFilteredMovies();
    renderMovie(filtered);
}

function setActiveFilter(activeId) {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    document.getElementById(activeId).classList.add("active");
}

function selectGenre(genre, btnId) {
    currentGenre = genre;
    setActiveFilter(btnId);
    applyFilter();
}

document.getElementById("btnAll").addEventListener("click", () => selectGenre("All", "btnAll"));
document.getElementById("btnAction").addEventListener("click", () => selectGenre("Action", "btnAction"));
document.getElementById("btnComedy").addEventListener("click", () => selectGenre("Comedy", "btnComedy"));
document.getElementById("btnSciFi").addEventListener("click", () => selectGenre("Sci-Fi", "btnSciFi"));
document.getElementById("btnMystery").addEventListener("click", () => selectGenre("Mystery", "btnMystery"));

document.getElementById("searchInput").addEventListener("input", (e) => {
    currentSearch = e.target.value.toLowerCase();
    applyFilter();
});

// --------

function openDetail(id) {
    const movie = movies.find(m => m.id === id);
    if (!movie) return;

    currentDetailId = id;

    document.getElementById("detailPoster").src = movie.poster;
    document.getElementById("detailPoster").alt = "Poster film " + movie.title;
    document.getElementById("detailBreadcrumbTitle").textContent = movie.title;
    document.getElementById("detailTitle").textContent = movie.title;
    document.getElementById("detailMeta").innerHTML = `<span class="star">&#9733;</span> ${movie.rating} &middot; ${movie.year} &middot; ${movie.genre}`;
    document.getElementById("detailSynopsis").textContent = movie.synopsis;
    document.getElementById("detailDirektor").textContent = movie.director;
    document.getElementById("detailWriter").textContent = movie.writer;

    updateDetailWatchlistButton(movie);
    renderCast(movie.cast);

    showSection("detail")
}

function renderCast(castArray) {
    const castList = document.getElementById("castList");
    castList.innerHTML= "";

    if (castArray.length === 0) {
        castList.innerHTML = `<p class="empty-state">Data pemeran belum tersedia</p>`;
        return;
    }

    castArray.forEach(actor => {
        castList.innerHTML += `
        <div class="cast-item">
        <img src="${actor.photo}" alt="${actor.name}">
        <p>${actor.name}</p>
        </div>
        `;
    });
}

function updateDetailWatchlistButton(movie) {
    const btn = document.getElementById("detailWatchlistBtn");
    const inWatchlist = isInWatchlist(movie.id);

    if (inWatchlist) {
        btn.classList.add("active");
        btn.innerHTML = `<i class="ti ti-heart"></i>Hapus dari Watchlist`;
    } else {
        btn.classList.remove("active");
        btn.innerHTML = `<i class="ti ti-heart"></i>Tambahkan dari Watchlist`;
    }
}

document.getElementById("detailWatchlistBtn").addEventListener("click", () => {
    if (currentDetailId !== null) {
        toggleWatchlist(currentDetailId);
    }
});

// ----------

function isInWatchlist(id) {
    return watchlist.some(movie => movie.id === id);
}

function toggleWatchlist(id) {
    const movie = movies.find(m => m.id === id);
    if (!movie) return;

    if (isInWatchlist(id)) {
        removeFromWatchlist(id);
    } else {
        addToWatchlist(movie);
    }

    applyFilter();
    renderWatchlist();
    updateWatchlistCount();

    if (currentDetailId === id) {
        updateDetailWatchlistButton(movie);
    }
}

function addToWatchlist(movie) {
    watchlist.push(movie);
    showToast(`${movie.title} ditambahkan ke watchlist`);
}

function removeFromWatchlist(id) {
    const movie = movies.find(m => m.id ===id);
    watchlist = watchlist.filter(m => m.id !== id);
    if (movie) {
        showToast(`${movie.title} dihapus dari watchlist`);
    }
}

function renderWatchlist() {
    const list = document.getElementById("watchlistList");
    list.innerHTML = "";

    if (watchlist.length === 0) {
        list.innerHTML = `<p class="empty-state">Belum ada film do watchlist kamu</p>`;
        return;
    }

    watchlist.forEach(movie => {
        list.innerHTML += `
            <div class="watchlist-item">
                <img src="${movie.poster}" alt="${movie.title}">
                <div class="text-wrap">
                    <h3>${movie.title}</h3>
                    <p class="info"><span class="star">&#9733;</span> ${movie.rating} &middot; ${movie.genre}</p>
                </div>
                <button class="remove-btn" data-id="${movie.id}" aria-label="Hapus ${movie.title} dari watchlist">
                    <i class="ti ti-trash"></i>
                </button>
            </div>
        `;
    });

    document.querySelectorAll(".remove-btn").forEach(btn =>{
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            toggleWatchlist(id);
        });
    });
}

function updateWatchlistCount() {
    document.getElementById("watchlistCount").textContent = watchlist.length + " film disimpan";
}

// -------------

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerHTML = `<i class="ti ti-circle-check"></i> ${message}`;
    toast.classList.remove("hidden");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout (() => {
        toast.classList.add("hidden");
    }, 2500);
}

// --------------
applyFilter();
renderWatchlist();
updateWatchlistCount();