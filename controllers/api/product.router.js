const router = require('express').Router();
const model = require('../../models/product.model');
const {User} = require("../../models");
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  model.findAll()
    .then((models)=> {
      if(!models) { models = []; }
      res.json(models);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    });
});

router.post('/', withAuth,async (req, res) => {
  const user = await User.findByPk(req.session.user_id, {
    attributes: {exclude: ['password']}
  });

  if(!user.isAdmin()) {
    res.status(401).send();
  }

  model.create(req.body)
    .then((newModel) => {
      res.json(newModel);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    });
});

router.put('/:id', withAuth, async (req, res) => {
  const user = await User.findByPk(req.session.user_id, {
    attributes: {exclude: ['password']}
  });

  if (!user.isAdmin()) {
    res.status(401).send();
  }

  model.update(
    {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedModel) => {
      res.json(updatedModel);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    });
});

router.delete('/:id', withAuth, async (req, res) => {
  const user = await User.findByPk(req.session.user_id, {
    attributes: {exclude: ['password']}
  });

  if (!user.isAdmin()) {
    res.status(401).send();
  }

  model.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    });
});

module.exports = router;
