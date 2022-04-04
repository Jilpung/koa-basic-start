import Router from 'koa-router';
const router = new Router({
  prefix: '/movies',
});

let movies = [
  { id: 0, movieTitle: 'Leogent1' },
  { id: 1, movieTitle: 'Leogent2' },
  { id: 2, movieTitle: 'Leogent3' },
];

router.get('/', (ctx, next) => {
  ctx.body = {
    status: 'success',
    movies: movies,
  };
  next();
});

router.post('/insert', (ctx, next) => {
  if (!ctx.request.body.movieTitle) {
    ctx.response.status = 400;
    ctx.body = 'xxx';
  } else {
    const lastId = movies[movies.length - 1].id;
    console.log(`last movieId: ${lastId}`);
    let newMovie = {
      id: lastId + 1,
      movieTitle: ctx.request.body.movieTitle,
    };
    movies.push(newMovie);
    ctx.response.status = 201;
    ctx.body = {
      status: 'success',
      message: `새로운 id: ${newMovie.id}의 책이 생성`,
    };
    next();
  }
});

router.get('/:id', (ctx, next) => {
  let filterdeMovie = null;
  filterdeMovie = movies.filter((movie) => {
    return movie.id == ctx.params.id;
  });
  if (filterdeMovie != null) {
    ctx.body = `현재영화는 ${filterdeMovie[0].movieTitle}입니다`;
  } else {
    ctx.response.status = 404;
    ctx.body = {
      status: 'err',
      message: '해당 id의 책이 존재하지 않습니다',
    };
    next();
  }
});

router.get('/', (ctx, next) => {
  const queryString = ctx.query.people;
  ctx.body = {
    status: 'success',
    movies: movies,
    peopleClient: queryString,
  };
  next();
});
module.exports = router;
