const Movie = require('../models/movie');
const NotFoundError = require('../errors/NotFoundError');

const getMovies = (req, res, next) => {
  const userId = req.user._id;
  Movie.find({ owner: userId })
    .orFail(() => {
      throw new NotFoundError('Сохраненные фильмы не найдены');
    })
    .populate(['owner'])
    .then((movies) => {
      res.send(movies);
    })
    .catch(next);
};

const createMovie = (req, res, next) => {
  const { body } = req;
  Movie
    .create({
      country: body.country,
      director: body.director,
      duration: body.duration,
      year: body.year,
      description: body.description,
      image: body.image,
      trailerLink: body.trailerLink,
      thumbnail: body.thumbnail,
      owner: req.user._id,
      movieId: body.movieId,
      nameRU: body.nameRU,
      nameEN: body.nameEN,
    })
    .then((movie) => {
      res.send(movie);
    })
    .catch(next);
};

const deleteMovie = (req, res, next) => {
  Movie.findByIdAndRemove(req.params._id)
    .orFail(() => {
      throw new NotFoundError('Фильм с указанным id не найден');
    })
    .then((movie) => {
      res.send(movie);
    })
    .catch(next);
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
