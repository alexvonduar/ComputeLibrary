var _n_e_softmax_layer_kernel_8cpp =
[
    [ "DECLARE_NEON_FUNCTIONS_FOR_FLOAT", "_n_e_softmax_layer_kernel_8cpp.xhtml#aedbe837d4d203f117c652cfc87bf659e", null ],
    [ "DECLARE_NEON_FUNCTIONS_FOR_TYPE", "_n_e_softmax_layer_kernel_8cpp.xhtml#a32a426c4abdceda8e1c40005df27f8d4", null ],
    [ "DECLARE_NEON_VEC_TYPE", "_n_e_softmax_layer_kernel_8cpp.xhtml#af743beb1ad23bceb05b4eeb3e491839c", null ],
    [ "FORWARD_DECLARE_VGET_LANE_FOR_TYPE", "_n_e_softmax_layer_kernel_8cpp.xhtml#a343c67edf168094b802af154b23df92a", null ],
    [ "const_ptr_t", "_n_e_softmax_layer_kernel_8cpp.xhtml#a926fa1a0e7fd320cff5ba6c6f62f463b", null ],
    [ "elem_type_t", "_n_e_softmax_layer_kernel_8cpp.xhtml#a534a101b6176c3e065eba4b4cde7a40e", null ],
    [ "ptr_t", "_n_e_softmax_layer_kernel_8cpp.xhtml#a1e36f8a2df3d6bd1756b90e2efb151e9", null ],
    [ "vec_16_byte_t", "_n_e_softmax_layer_kernel_8cpp.xhtml#aef7a69b9cf4a1732d2be114b9b9bf3e3", null ],
    [ "vec_8_byte_t", "_n_e_softmax_layer_kernel_8cpp.xhtml#ab448de27f94cd38059b63980c3c08f40", null ],
    [ "vec_n_byte_t", "_n_e_softmax_layer_kernel_8cpp.xhtml#a5cd8407762d2446f8eceefcc4b63e537", null ],
    [ "vec_n_t", "_n_e_softmax_layer_kernel_8cpp.xhtml#a3fd0d641ff68bfe8475361a13de7b1cc", null ],
    [ "sqadd", "_n_e_softmax_layer_kernel_8cpp.xhtml#a671b1da70aa3efc02c508648ae2d81b5", null ],
    [ "sqmul", "_n_e_softmax_layer_kernel_8cpp.xhtml#a705ed42150ffbe645f7ba2fb5d0a5bb6", null ],
    [ "sqsub", "_n_e_softmax_layer_kernel_8cpp.xhtml#a7462bb232b41864413a4d8603a660d16", null ],
    [ "vadd", "_n_e_softmax_layer_kernel_8cpp.xhtml#abe949a509da417044624d62a73057441", null ],
    [ "vadd", "_n_e_softmax_layer_kernel_8cpp.xhtml#ab11431f1a64a618e5ed1d37634d0e0fe", null ],
    [ "vadd", "_n_e_softmax_layer_kernel_8cpp.xhtml#a4cc9ed76f48e918e73249c894380f91b", null ],
    [ "vcvt", "_n_e_softmax_layer_kernel_8cpp.xhtml#a6cb464349a8f184ffb8eded9ae9e5925", null ],
    [ "vcvt< float32x4x4_t >", "_n_e_softmax_layer_kernel_8cpp.xhtml#a146b84422a0eaf6c66ba8156425b5bdf", null ],
    [ "vcvt< uint8x16_t >", "_n_e_softmax_layer_kernel_8cpp.xhtml#ab6bc00d6c4503a0bc303dd363e021476", null ],
    [ "vdup_n", "_n_e_softmax_layer_kernel_8cpp.xhtml#a2603e5f72e3fa052025c189c1a6647ce", null ],
    [ "vdup_n< float32x4x4_t >", "_n_e_softmax_layer_kernel_8cpp.xhtml#aeabe5dd1c5751f380322a841d7ad8d7a", null ],
    [ "vdup_n< vec_16_byte_t< float > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#ace69f5de3783f9cd924dac392710facf", null ],
    [ "vdup_n< vec_16_byte_t< int16_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#aa6ec87dc4f97241833eace4b1784cc50", null ],
    [ "vdup_n< vec_16_byte_t< int32_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#a434a14d651e75e624bfed91646a9582e", null ],
    [ "vdup_n< vec_16_byte_t< int8_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#a3c5a58b994f82b7eb24e85803fdd08c1", null ],
    [ "vdup_n< vec_16_byte_t< uint16_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#a93020987fbede1b8da7db6a1a855ddd4", null ],
    [ "vdup_n< vec_16_byte_t< uint32_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#aacce75282b76aeb1eda5375b6dcef231", null ],
    [ "vdup_n< vec_16_byte_t< uint8_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#a84aacbb969d72f3b89aa93cc87af9bdf", null ],
    [ "vdup_n< vec_8_byte_t< float > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#ae23d199254b002d668fde87246f2f6f7", null ],
    [ "vdup_n< vec_8_byte_t< int16_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#a10a9088cc35ece085610063eec583ad1", null ],
    [ "vdup_n< vec_8_byte_t< int32_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#aee16a2b366642146ef353e0939a71b83", null ],
    [ "vdup_n< vec_8_byte_t< int8_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#afbcedeccc32a67996ea90a0a97c94269", null ],
    [ "vdup_n< vec_8_byte_t< uint16_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#aca706ca8cd2fec97cf6b3ab747c40dc6", null ],
    [ "vdup_n< vec_8_byte_t< uint32_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#af8c50d8dac4fe454183078d34515b50a", null ],
    [ "vdup_n< vec_8_byte_t< uint8_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#a194e168c19bf049bd3e903552f112d5c", null ],
    [ "vec_size_of", "_n_e_softmax_layer_kernel_8cpp.xhtml#af4b13d125dfe1bec25b8df8840c6dd8f", null ],
    [ "vexp", "_n_e_softmax_layer_kernel_8cpp.xhtml#a91d2c1f68de68401d1aa465e27f78ab0", null ],
    [ "vexp", "_n_e_softmax_layer_kernel_8cpp.xhtml#adcb77ffd576a7addf3be8508e50451d2", null ],
    [ "vget_high", "_n_e_softmax_layer_kernel_8cpp.xhtml#af311129b4dccf2fbd9307a7d644876d1", null ],
    [ "vget_high", "_n_e_softmax_layer_kernel_8cpp.xhtml#abfb64320f5b05fc08dffafc2b039e559", null ],
    [ "vget_high", "_n_e_softmax_layer_kernel_8cpp.xhtml#aebe61fd1828294b9794b3c87174649b2", null ],
    [ "vget_high", "_n_e_softmax_layer_kernel_8cpp.xhtml#afc14b8933176ce40c7b99a1ef0f6a062", null ],
    [ "vget_high", "_n_e_softmax_layer_kernel_8cpp.xhtml#a94683a211fef1215ec7576bc74a1cc68", null ],
    [ "vget_high", "_n_e_softmax_layer_kernel_8cpp.xhtml#aeaf3494a0fcf8be9555194a8e7a18a07", null ],
    [ "vget_high", "_n_e_softmax_layer_kernel_8cpp.xhtml#abc735b1b07e30e093dd39507606a1e35", null ],
    [ "vget_lane", "_n_e_softmax_layer_kernel_8cpp.xhtml#a5229f4c7a2c8d07ebc247c3e5075af2b", null ],
    [ "vget_lane", "_n_e_softmax_layer_kernel_8cpp.xhtml#a40552ea65ee3fc6d7fa7f1fb17baebe7", null ],
    [ "vget_lane", "_n_e_softmax_layer_kernel_8cpp.xhtml#a46b08aeab78badc7365668e0051e7fac", null ],
    [ "vget_lane", "_n_e_softmax_layer_kernel_8cpp.xhtml#a2cb9483082ea29427722db15d23ec130", null ],
    [ "vget_lane", "_n_e_softmax_layer_kernel_8cpp.xhtml#aaa7aea48ed8a5c267d4631ad6884e0bd", null ],
    [ "vget_lane", "_n_e_softmax_layer_kernel_8cpp.xhtml#ab2aef7b4b81a6108c8d7a8f782340850", null ],
    [ "vget_lane", "_n_e_softmax_layer_kernel_8cpp.xhtml#aab831e66636598a49c321c248da55108", null ],
    [ "vget_lane", "_n_e_softmax_layer_kernel_8cpp.xhtml#a21a10c0d7629ac794f59a6e06dad8b7c", null ],
    [ "vget_lane", "_n_e_softmax_layer_kernel_8cpp.xhtml#a1050dd97652f516c036f54173d3cce10", null ],
    [ "vget_lane", "_n_e_softmax_layer_kernel_8cpp.xhtml#a6e766d98a0e130be624d6dee74c8fb29", null ],
    [ "vget_lane", "_n_e_softmax_layer_kernel_8cpp.xhtml#a61f87c089f50e7016ac74d79bbc417eb", null ],
    [ "vget_lane", "_n_e_softmax_layer_kernel_8cpp.xhtml#adc187f0eff944013383bdc28e8d1e713", null ],
    [ "vget_lane", "_n_e_softmax_layer_kernel_8cpp.xhtml#a696409f1f3c572c8a899605e36b87e9a", null ],
    [ "vget_lane", "_n_e_softmax_layer_kernel_8cpp.xhtml#a2b122d56b7bf307cf06ec05b4bdeea63", null ],
    [ "vget_lane", "_n_e_softmax_layer_kernel_8cpp.xhtml#a45617be0c289f11c60f659f3123fb210", null ],
    [ "vget_low", "_n_e_softmax_layer_kernel_8cpp.xhtml#a3bb60064e505cfd3a0d43528a3c1845d", null ],
    [ "vget_low", "_n_e_softmax_layer_kernel_8cpp.xhtml#a2a0a49e26931849079897f0a225589cb", null ],
    [ "vget_low", "_n_e_softmax_layer_kernel_8cpp.xhtml#a5b825f82ef9a09db968b003310b44030", null ],
    [ "vget_low", "_n_e_softmax_layer_kernel_8cpp.xhtml#a264ecd01ca0763d79aa4ad5515ce7b65", null ],
    [ "vget_low", "_n_e_softmax_layer_kernel_8cpp.xhtml#a0477c495757cd6c2bdf6f151aa26a542", null ],
    [ "vget_low", "_n_e_softmax_layer_kernel_8cpp.xhtml#a4624ac629ac1199b9482f01334fe93a8", null ],
    [ "vget_low", "_n_e_softmax_layer_kernel_8cpp.xhtml#ae83ce5db69a7a14f5c0ee9d9326e1a40", null ],
    [ "vld", "_n_e_softmax_layer_kernel_8cpp.xhtml#a85d0b4103385d996d4014691d2df0cf1", null ],
    [ "vld< vec_16_byte_t< float > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#aa8e2f6d1e361e3ac707595f1092b9103", null ],
    [ "vld< vec_16_byte_t< int16_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#afd4981f6532c3a76716e3053d119e269", null ],
    [ "vld< vec_16_byte_t< int32_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#a1acc117060f7ad740f059fbb97359d6b", null ],
    [ "vld< vec_16_byte_t< int8_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#a9d896907abfbde0613b952bb4db5897a", null ],
    [ "vld< vec_16_byte_t< uint16_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#ad2174760efe31f80528b5a4cf8ebed66", null ],
    [ "vld< vec_16_byte_t< uint32_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#a13a69ef04626a27771a6e19542cac767", null ],
    [ "vld< vec_16_byte_t< uint8_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#a70cff70817eb6a40e893331c4df276a5", null ],
    [ "vld< vec_8_byte_t< float > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#a323be126777e57614c5dc57ee1345c7e", null ],
    [ "vld< vec_8_byte_t< int16_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#a1b29ca880e2b7282c9318d6c36f07140", null ],
    [ "vld< vec_8_byte_t< int32_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#a10449c2936e1986b131e8c070db9c16b", null ],
    [ "vld< vec_8_byte_t< int8_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#add42730b56d7b3614fc39f525eb55286", null ],
    [ "vld< vec_8_byte_t< uint16_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#ab764431d90825796c5060d85810781fa", null ],
    [ "vld< vec_8_byte_t< uint32_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#ac7a8e67b90d2c99626733ea9bdc60a1d", null ],
    [ "vld< vec_8_byte_t< uint8_t > >", "_n_e_softmax_layer_kernel_8cpp.xhtml#abcfc5b1ed91557ba1b6edf2eae8533e7", null ],
    [ "vmax", "_n_e_softmax_layer_kernel_8cpp.xhtml#a1cb1c90103d83ca052919e98dbaac553", null ],
    [ "vmax", "_n_e_softmax_layer_kernel_8cpp.xhtml#a2ee044b41b71a344cad69a08aecb1d5f", null ],
    [ "vmax", "_n_e_softmax_layer_kernel_8cpp.xhtml#a7c4bfe1c9c07571952a81783fa8540de", null ],
    [ "vmax", "_n_e_softmax_layer_kernel_8cpp.xhtml#abe221c26fe4f91102c0f7b5e2336c070", null ],
    [ "vmax", "_n_e_softmax_layer_kernel_8cpp.xhtml#a1bb4dd507d55db5ae8fafab84d31b870", null ],
    [ "vmax", "_n_e_softmax_layer_kernel_8cpp.xhtml#a4e2374d1a63f2e9433b7965eede927af", null ],
    [ "vmax", "_n_e_softmax_layer_kernel_8cpp.xhtml#a837afab6fd85e34f2bd6e267f4c9e849", null ],
    [ "vmul_n", "_n_e_softmax_layer_kernel_8cpp.xhtml#a5dce3fda8114a32a2c8f1f517adca368", null ],
    [ "vmul_n", "_n_e_softmax_layer_kernel_8cpp.xhtml#abc9f4323a93d34d19bab7cc371649441", null ],
    [ "vpmax", "_n_e_softmax_layer_kernel_8cpp.xhtml#aae85042ef273ca700734604b5488f2ff", null ],
    [ "vpmax", "_n_e_softmax_layer_kernel_8cpp.xhtml#a0d9a679f8dfa41f17d46f6c1e56ca82d", null ],
    [ "vpmax", "_n_e_softmax_layer_kernel_8cpp.xhtml#a2bc9036a2d288d7a4ad2d015d91ba5d9", null ],
    [ "vpmax", "_n_e_softmax_layer_kernel_8cpp.xhtml#ab831eb6268e8d3dcfd9ce6e1e7daf598", null ],
    [ "vpmax", "_n_e_softmax_layer_kernel_8cpp.xhtml#aacd10f0e821aff266057a1fc443c6344", null ],
    [ "vpmax", "_n_e_softmax_layer_kernel_8cpp.xhtml#aeb42b9eb65ed0207ddcdb9c870fd5697", null ],
    [ "vpmax", "_n_e_softmax_layer_kernel_8cpp.xhtml#af8efc828ccf4a8f2c6b26cfe3813952d", null ],
    [ "vst", "_n_e_softmax_layer_kernel_8cpp.xhtml#a3753b9d735032ba72e7df0c5cbba31a1", null ],
    [ "vst", "_n_e_softmax_layer_kernel_8cpp.xhtml#aa17a7667769390f153ad5289d5390341", null ],
    [ "vst", "_n_e_softmax_layer_kernel_8cpp.xhtml#ab2c29d96efc44a4163d8f594cd836d1e", null ],
    [ "vst", "_n_e_softmax_layer_kernel_8cpp.xhtml#acec5b4ba08b0ab7d080e2177e4b3deb1", null ],
    [ "vst", "_n_e_softmax_layer_kernel_8cpp.xhtml#a9893527df6922f85f0f3173142247ece", null ],
    [ "vst", "_n_e_softmax_layer_kernel_8cpp.xhtml#a090a9d8254580d7c22668e21e581d58e", null ],
    [ "vst", "_n_e_softmax_layer_kernel_8cpp.xhtml#a7a7441e9c3870a817f9084697730a0e9", null ],
    [ "vst", "_n_e_softmax_layer_kernel_8cpp.xhtml#ac9aedf36525da0e2306db27867c2bb5d", null ],
    [ "vst", "_n_e_softmax_layer_kernel_8cpp.xhtml#aa1e4aafb14bd8eee38caa7ad5db69507", null ],
    [ "vst", "_n_e_softmax_layer_kernel_8cpp.xhtml#aca451511712482f55001063da2317427", null ],
    [ "vst", "_n_e_softmax_layer_kernel_8cpp.xhtml#a59f96d9a74850a843c1f710803fe8de8", null ],
    [ "vst", "_n_e_softmax_layer_kernel_8cpp.xhtml#a788c1fc3809f77d2866e4282d374770b", null ],
    [ "vst", "_n_e_softmax_layer_kernel_8cpp.xhtml#a01cfd18ed87a496fc5d3be04a040be61", null ],
    [ "vst", "_n_e_softmax_layer_kernel_8cpp.xhtml#abd25994f8abe7093700a88a65fdb6ad5", null ],
    [ "vsub", "_n_e_softmax_layer_kernel_8cpp.xhtml#ad0ebbe865e9e6cfd1b2df041f8374ed0", null ]
];