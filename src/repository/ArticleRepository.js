import { BaseRepository } from "./BaseRepository"

class ArticleRepository extends BaseRepository {
    getMany() {
        return super.getMany()
    }

    get(id) {
        return super.get(id)
    }

    create(data) {
        return super.create(data)
    }

    delete(id) {
        return super.delete(id)
    }
}

export default ArticleRepository
