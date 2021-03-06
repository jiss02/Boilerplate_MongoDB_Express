import hashTagService from '../services/hashtagService.js';

async function getHashTags(req, res) {
  try {
    const hashTags = hashTagService.getHashTags();
    res.status(200).json(hashTags);
  } catch (err) {
    res.status(500).json('Error while find hashTags');
  }
}

async function addHashTag(req, res) {
  try {
    const { tag } = req.body;

    const hashTag = hashTagService.addHashTag(tag);
    res.status(200).json(hashTag);
  } catch (err) {
    res.status(500).json('Error while add hashTag');
  }
}

async function updateHashTag(req, res) {
  try {
    const { id } = req.params;
    const { tag } = req.body;

    const hashTag = hashTagService.updateHashTag({
      _id: id,
      tag,
    });

    res.status(200).json(hashTag);
  } catch (err) {
    res.status(500).json('Error while update hashTag');
  }
}

async function deleteHashTag(req, res) {
  try {
    const { id } = req.params;

    const result = hashTagService.deleteHashTag(id);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json('Error while delete hashTag');
  }
}

export default {
  getHashTags,
  addHashTag,
  updateHashTag,
  deleteHashTag,
};
