'use strict';

import app from '../src/app';
import supertest from 'supertest';

const request = supertest.agent(app.listen());

describe('Index Page', function () {
    it('returns status code 200', function (done) {
        request
            .get('/')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                done();
            })
    });
});