export default class StringUtils {
  public static getString = (o) => {
    if (o !== null) {
      if (typeof o === 'string') {
        return o;
      } else {
        return JSON.stringify(o);
      }
    } else {
      return null;
    }
  };

  public static removeAccents(str: string) {
    str = str?.toLowerCase().trim();
    const from =
        'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ',
      to =
        'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy';
    for (let i = 0, l = from.length; i < l; i++) {
      str = str?.replace(RegExp(from[i], 'gi'), to[i]);
    }
    return str;
  }
}
